const catalog = require("../models/catalog");

const createproduct = async (req, res) => {
	try {
		const newCatalog = new catalog(req.body);
		await newCatalog.save();
        res.status(201).json(newCatalog);

	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const getproduct = async (req, res) => {
	try {
		const listcatalog = await catalog.find();
		res.status(200).json(listcatalog);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const updateproduct = async (req, res) => {
	try {
		const updateproduct = await catalog.findByIdAndUpdate(
			req.params.id,
			req.body
		);
		if (!updateproduct) {
			res.status(404).json({ message: "Catalog not found" });
		}
		res.status(200).json({ message: "Catalog updated" });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

const removeproduct = async (req, res) => {
	try {
		await catalog.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: "Catalog deleted" });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// exportamos la funciones para poder usarlas en otros archivos
module.exports = { createproduct, getproduct, updateproduct, removeproduct };
