const FormModel = require('./FormModel');

// GET
module.exports.getForm = async(req, res) => {
    const userForm  = await FormModel.find();
    res.send(userForm)
}

// POST
module.exports.saveForm  = async(req, res) => {
    const { name, email, message } = req.body;
    FormModel.create({ name, email, message })
    .then((data) => {console.log('Form is added!!')
    res.send(data)
    })
    
}