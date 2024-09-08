const order = require("../models/order");
const Catalog = require("../models/catalog");

const createorder = async (req, res) => {
	const { catalogId, quantity } = req.body;
	try {
		const catalogproduct = await Catalog.findById(catalogId);
		
		// se verifica si existe el producto
		if (!catalogproduct) {
			return res.status(404).json({ message: "Not found the product" });
		}

		// se verfica si hay suficiente stock
		if (catalogproduct.stock < quantity) {
			return res.status(400).json({ message: "There is no enough stock" });
		}

		const neworder = new order({ catalogId, quantity });
		await neworder.save();

		// se actualiza el stock del producto
		catalogproduct.stock -= quantity;
		await catalogproduct.save();
		res.status(201).json(neworder);
		
	} catch (error) {
		res.status(400).json({ message: "No se pudo crear el producto", error });
	}
};

const getorder = async (req, res) => {
    try {
        const orders = await order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(404).json({ message: "No se encontraron productos", error });
    }
}

module.exports = { createorder, getorder };
