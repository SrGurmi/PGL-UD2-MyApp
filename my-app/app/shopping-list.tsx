import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useTheme } from '../constants/theme';
import ProductFormModal from '../components/ProductFormModal';
import ProductItem from './shopping-list/ProductItem';
import 'react-native-get-random-values';
import uuid from 'react-native-uuid';

export interface Product {
    id: string;
    name: string;
    category: string;
    quantity: number;
    price: number;
    inCart: boolean;
}

interface ProductItemProps {
    product: Product;
    onDelete: (id: string) => void;
    onToggleInCart: (id: string) => void;
    onEdit: () => void;
}

interface ProductFormModalProps {
    isVisible: boolean;
    onClose: () => void;
    onSubmit: (newProduct: Omit<Product, 'id' | 'inCart'>) => void;
    initialValues: { name: string; category: string; quantity: number; price: number } | null;
}

const ShoppingListScreen = () => {
    const { theme } = useTheme();
    const [products, setProducts] = useState<Product[]>([
        {
            id: uuid.v4() as string,
            name: "Pan Integral",
            category: "Panadería",
            quantity: 2,
            price: 1.5,
            inCart: false,
        },
        {
            id: uuid.v4() as string,
            name: "Leche",
            category: "Bebidas",
            quantity: 1,
            price: 0.99,
            inCart: true,
        },
        {
            id: uuid.v4() as string,
            name: "Atún enlatado",
            category: "Enlatados",
            quantity: 3,
            price: 1.2,
            inCart: false,
        },
    ]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const addProduct = (newProduct: Omit<Product, 'id' | 'inCart'>) => {
        if (selectedProduct) {
            setProducts(prevProducts =>
                prevProducts.map(product =>
                    product.id === selectedProduct.id ? { ...product, ...newProduct } : product
                )
            );
            setSelectedProduct(null);
        } else {
            setProducts(prevProducts => [
                ...prevProducts,
                { ...newProduct, id: uuid.v4() as string, inCart: false }
            ]);
        }
        setModalVisible(false);
    };

    const removeProduct = (id: string) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const toggleInCart = (id: string) => {
        setProducts(products.map(product =>
            product.id === id ? { ...product, inCart: !product.inCart } : product
        ));
    };

    const clearAll = () => setProducts([]);

    const totalPrice = products.reduce(
        (total, product) => total + (product.price * product.quantity),
        0
    );

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.header, { color: theme.primary }]}>
                Lista de la Compra - Total: €{totalPrice.toFixed(2)}
            </Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProductItem
                        product={item}
                        onDelete={removeProduct}
                        onToggleInCart={toggleInCart}
                        onEdit={() => {
                            setSelectedProduct(item);
                            setModalVisible(true);
                        }}
                    />
                )}
                ListEmptyComponent={
                    <Text style={[styles.emptyMessage, { color: theme.text }]}>
                        La lista está vacía.
                    </Text>
                }
            />
            <TouchableOpacity
                style={[styles.addButton, { backgroundColor: theme.primary }]}
                onPress={() => {
                    setSelectedProduct(null);
                    setModalVisible(true);
                }}
            >
                <Text style={{ color: theme.text }}>Añadir Producto</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.clearButton, { backgroundColor: theme.secondary }]}
                onPress={clearAll}
                disabled={products.length === 0}
            >
                <Text style={{ color: theme.text }}>
                    {products.length === 0 ? "Nada que borrar" : "Borrar todo"}
                </Text>
            </TouchableOpacity>
            <ProductFormModal
                isVisible={isModalVisible}
                onClose={() => setModalVisible(false)}
                onSubmit={addProduct}
                initialValues={selectedProduct ? {
                    name: selectedProduct.name,
                    category: selectedProduct.category,
                    quantity: selectedProduct.quantity,
                    price: selectedProduct.price,
                } : null}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 80 },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    emptyMessage: { textAlign: 'center', marginVertical: 20 },
    addButton: { padding: 12, borderRadius: 5, alignItems: 'center', marginVertical: 10 },
    clearButton: { padding: 12, borderRadius: 5, alignItems: 'center', marginVertical: 10 },
});

export default ShoppingListScreen;