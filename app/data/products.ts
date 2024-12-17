export const products = [
    {
        id: '1',
        name: 'Modern Sofa',
        description: 'Elegant 3-seater sofa with premium fabric',
        price: 999.99,
        imageUrl: '~/assets/images/sofa.jpg',
        arModelUrl: '~/assets/models/sofa.glb',
        customizationOptions: [
            {
                name: 'Fabric',
                options: ['Leather', 'Velvet', 'Linen'],
                price: 199.99
            },
            {
                name: 'Color',
                options: ['Gray', 'Blue', 'Beige'],
                price: 0
            }
        ]
    },
    // Add more products here
];