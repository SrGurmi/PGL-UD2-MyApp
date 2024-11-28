import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useTheme } from '../../constants/theme';

interface Product {
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

const categoryImages: { [key: string]: any } = {
    Panaderia: require('../../assets/panaderia.png'),
    Bebidas: require('../../assets/bebidas.png'),
    Enlatados: require('../../assets/enlatados.png'),
    Carnes: require('../../assets/carnes.png'),
    Pescados: require('../../assets/pescados.png'),
    Frutas: require('../../assets/frutas.png'),
    Otros: require('../../assets/otros.png'),
};

const ProductItem: React.FC<ProductItemProps> = ({ product, onDelete, onToggleInCart, onEdit }) => {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.secondary }]}>
            <Image
                source={categoryImages[product.category] || categoryImages["Otros"]}
                style={styles.image}
            />
            <TouchableOpacity onPress={() => onToggleInCart(product.id)}>
                <Text style={[
                    styles.name,
                    { color: theme.text, textDecorationLine: product.inCart ? 'line-through' : 'none' }
                ]}>
                    {product.name} ({product.category})
                </Text>
            </TouchableOpacity>
            <Text style={[styles.details, { color: theme.text }]}>
                {product.quantity} x €{product.price.toFixed(2)}
            </Text>
            <View style={styles.actions}>
                <TouchableOpacity onPress={onEdit}>
                    <Text style={{ color: theme.primary }}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDelete(product.id)}>
                    <Text style={{ color: theme.primary }}>Eliminar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flexDirection: 'row', padding: 10, marginVertical: 5, borderRadius: 5, alignItems: 'center' },
    image: { width: 40, height: 40, marginRight: 10 },
    name: { fontSize: 16, flex: 1 },
    details: { fontSize: 14, textAlign: 'right' },
    actions: { flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10 },
});

export default ProductItem;
