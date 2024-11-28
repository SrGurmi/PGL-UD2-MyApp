import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../constants/theme';
import { Product } from '../app/shopping-list';

interface ProductFormModalProps {
    isVisible: boolean;
    onClose: () => void;
    onSubmit: (newProduct: Omit<Product, 'id' | 'inCart'>) => void;
    initialValues?: { name: string; category: string; quantity: number; price: number } | null;
}

const ProductFormModal: React.FC<ProductFormModalProps> = ({ isVisible, onClose, onSubmit, initialValues }) => {
    const { theme } = useTheme();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('1');
    const [price, setPrice] = useState('');

    useEffect(() => {
        if (initialValues) {
            setName(initialValues.name);
            setCategory(initialValues.category);
            setQuantity(initialValues.quantity.toString());
            setPrice(initialValues.price.toString());
        } else {
            resetFields();
        }
    }, [initialValues]);

    const resetFields = () => {
        setName('');
        setCategory('');
        setQuantity('1');
        setPrice('');
    };

    const handleAddOrEditProduct = () => {
        if (name && category && quantity && price) {
            onSubmit({ name, category, quantity: parseInt(quantity, 10), price: parseFloat(price) });
            resetFields();
            onClose();
        }
    };

    return (
        <Modal visible={isVisible} transparent animationType="slide">
            <View style={[styles.overlay, { backgroundColor: theme.overlay }]}>
                <View style={[styles.modalContainer, { backgroundColor: theme.background }]}>
                    <Text style={[styles.title, { color: theme.primary }]}>
                        {initialValues ? "Editar Producto" : "Añadir Producto"}
                    </Text>
                    <TextInput
                        placeholder="Nombre"
                        placeholderTextColor={theme.text}
                        style={[styles.input, { borderColor: theme.primary, color: theme.text }]}
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        placeholder="Categoría"
                        placeholderTextColor={theme.text}
                        style={[styles.input, { borderColor: theme.primary, color: theme.text }]}
                        value={category}
                        onChangeText={setCategory}
                    />
                    <TextInput
                        placeholder="Cantidad"
                        placeholderTextColor={theme.text}
                        style={[styles.input, { borderColor: theme.primary, color: theme.text }]}
                        value={quantity}
                        onChangeText={setQuantity}
                        keyboardType="numeric"
                    />
                    <TextInput
                        placeholder="Precio por unidad"
                        placeholderTextColor={theme.text}
                        style={[styles.input, { borderColor: theme.primary, color: theme.text }]}
                        value={price}
                        onChangeText={setPrice}
                        keyboardType="numeric"
                    />
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={[styles.button, { backgroundColor: theme.primary }]} onPress={handleAddOrEditProduct}>
                            <Text style={{ color: theme.text }}>{initialValues ? "Editar" : "Añadir"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, { backgroundColor: theme.secondary }]} onPress={() => {
                            resetFields();
                            onClose();
                        }}>
                            <Text style={{ color: theme.text }}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    modalContainer: { width: '80%', padding: 20, borderRadius: 10 },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
    input: { borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 10 },
    buttonsContainer: { flexDirection: 'row', justifyContent: 'space-between' },
    button: { padding: 10, borderRadius: 5, flex: 1, alignItems: 'center', marginHorizontal: 5 },
});

export default ProductFormModal;
