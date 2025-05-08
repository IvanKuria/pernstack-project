import { sql } from "../config/db.js"

export const getProducts = async (req, res) => {
    try {
        const products = await sql`
            SELECT * FROM products
            ORDER BY created_at DESC  
        `;
        console.log("fetched products", products);
        res.status(200).json({success: true, data: products})  ;
    } catch (error) {
        console.log("Error fetching all products", error);
        res.send(500).json({success: false, message: "Internal Server Error"})
    }
};

export const createProduct = async (req, res) => {
    const { name, price, image } = req.body;

    if (!name || !price || !image) {
        res.send(400).json({success: false, message: "All fields are required"})
    }

    try {
         
    } catch (error) {
        
    }
};


export const getProduct = async (req, res) => {};
export const updateProduct = async (req, res) => {};
export const deleteProduct = async (req, res) => {};
