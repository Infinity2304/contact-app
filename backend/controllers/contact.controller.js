import Contact from "../models/contact.model.js";

export const saveContact = async(req, res)=>{
    try {
        const {fullName, number} = req.body;

        const contact = await Contact.findOne({number}); //Find the contact number in data

        //Check is the contact already exists in the data
        if(contact){
            return res.status(400).json({error: "Contact already exists"})
        }

        //Create new contact
        const newContact = new Contact({
            fullName,
            number
        })

        //Checking if newContact is formed
        if(newContact){
            await newContact.save();

            res.status(200).json({
                fullName: newContact.fullName,
                number: newContact.number
            })
        }else{
            res.status(400).json({ error: "Invalid contact data" })
        }
    } catch (error) {
        console.log("Error in saveContact controller: ", error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const getContact = async(req, res)=>{
    try {
        const {fullName} = req.body;

        const contact = await Contact.find({fullName: { $regex: fullName, $options: 'i' } });

        if(contact.length==0){
            return res.status(200).json([]);
        }

        if(contact && contact.length>0){
            const result = contact.map(contact=>({
                _id: contact._id,
                fullName: contact.fullName,
                number: contact.number
            }));    
            res.json(result);
        }

    } catch (error) {
        console.log("Error in getContact controller: ", error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
}