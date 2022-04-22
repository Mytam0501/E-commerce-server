const Blog = require('../models/blog.js');
const OurTeam = require('../models/OurTeam.js');
const User = require('../models/user.js');
const Cart = require('../models/cart.js');
const Products = require('../models/product.js');
const bcrypt = require('bcrypt');
const fs = require('fs');
const jwt = require('jsonwebtoken');


module.exports = class API{

    //fetch all product
    static async fetchAllProduct(req, res, next){
        
        try {
            const prd = await Products.find();
            res.status(200).json(prd);
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }

    //fetch product by ID
    static async fetchProductByID(req, res, next){
        try {
            const product = await Product.findOne({slug: req.params.slug});
            res.status(200).json(product);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    //create product
    static async createProduct(req, res, next){
       const product = req.body;
       const imagename = req.file.filename;
       product.image = imagename;
       try {
           await Product.create(product);
           res.status(201).json({message: 'product created successfully!!'})
       } catch (error) {
            res.status(400).json({message: error.message})   
       }
    }

    //update product
    static async updateProduct(req, res, next){
        const id = req.params.id;
        let new_image = '';
        if(res.file){
            new_image = req.file.filename;
            try {
                fs.unlinkSync('../server/src/uploads/' + req.body.old_image);
            } catch (error) {
                console.log(error);
            }
        }else{
            new_image = req.body.old_image;
        }

        const newProduct = req.body;
        newProduct.image = new_image;

        try {
            await Product.findByIdAndUpdate(id, newProduct);
            res.status(201).json({message: 'product updated successfully!!'})
       } catch (error) {
            res.status(400).json({message: error.message})   
       }
    }

    //delete product
    static async deleteProduct(req, res, next){
        const id = req.params.id;
        try {
            const result = await Products.findByIdAndDelete(id);
            if(result.image != ''){
                try {
                    fs.unlinkSync('../server/src/uploads/' + result.image);
                } catch (error) {
                    console.log(error);
                }
            }
            res.status(201).json({message: 'product deleted successfully!!'})
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
    //fetch all blog
    static async fetchAllBlog(req, res, next){
        try {
            const Blogs = await Blog.find();
            res.status(200).json(Blogs);
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }

    //fetch Blog by ID
    static async fetchBlogByID(req, res, next){
        try {
            const blog = await Blog.findOne({slug: req.params.slug});
            res.status(200).json(blog);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    //create Blog
    static async createBlog(req, res, next){
       const blog = req.body;
       const imagename = req.file.filename;
       blog.image = imagename;
       try {
           await Blog.create(blog);
           res.status(201).json({message: 'blog created successfully!!'})
       } catch (error) {
            res.status(400).json({message: error.message})   
       }
    }

    //update Blog
    static async updateBlog(req, res, next){
        const id = req.params.id;
        let new_image = '';
        if(res.file){
            new_image = req.file.filename;
            try {
                fs.unlinkSync('../server/src/uploads/' + req.body.old_image);
            } catch (error) {
                console.log(error);
            }
        }else{
            new_image = req.body.old_image;
        }

        const newBlog = req.body;
        newBlog.image = new_image;

        try {
            await Blog.findByIdAndUpdate(id, newBlog);
            res.status(201).json({message: 'Blog updated successfully!!'})
       } catch (error) {
            res.status(400).json({message: error.message})   
       }
    }

    //delete Blog
    static async deleteBlog(req, res, next){
        const id = req.params.id;
        try {
            const result = await Blog.findByIdAndDelete(id);
            if(result.image != ''){
                try {
                    fs.unlinkSync('../server/src/uploads/' + result.image);
                } catch (error) {
                    console.log(error);
                }
            }
            res.status(201).json({message: 'Blog deleted successfully!!'})
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
     //fetch all OurTeam
    static async fetchAllOurTeam(req, res, next){
        try {
            const OurTeams = await OurTeam.find();
            res.status(200).json(OurTeams);
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }

    //fetch OurTeam by ID
    static async fetchOurTeamByID(req, res, next){
        const id = req.params.id;
        try {
            const ourTeam = await OurTeam.findById(id);
            res.status(200).json(ourTeam);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }

    //create OurTeam
    static async createOurTeam(req, res, next){
       const ourTeam = req.body;
       const imagename = req.file.filename;
       ourTeam.image = imagename;
       try {
           await OurTeam.create(ourTeam);
           res.status(201).json({message: 'OurTeam created successfully!!'})
       } catch (error) {
            res.status(400).json({message: error.message})   
       }
    }

    //update OurTeam
    static async updateOurTeam(req, res, next){
        const id = req.params.id;
        let new_image = '';
        if(res.file){
            new_image = req.file.filename;
            try {
                fs.unlinkSync('../server/src/uploads/' + req.body.old_image);
            } catch (error) {
                console.log(error);
            }
        }else{
            new_image = req.body.old_image;
        }

        const newOurTeam = req.body;
        newOurTeam.image = new_image;

        try {
            await OurTeam.findByIdAndUpdate(id, newOurTeam);
            res.status(201).json({message: 'OurTeam updated successfully!!'})
       } catch (error) {
            res.status(400).json({message: error.message})   
       }
    }

    //delete OurTeam
    static async deleteOurTeam(req, res, next){
        const id = req.params.id;
        try {
            const result = await OurTeam.findByIdAndDelete(id);
            if(result.image != ''){
                try {
                    fs.unlinkSync('../server/src/uploads/' + result.image);
                } catch (error) {
                    console.log(error);
                }
            }
            res.status(201).json({message: 'OurTeam deleted successfully!!'})
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
    //fetch all users
    static async fetchUser(req, res, next){
        try {
            const u = await User.find();
            res.status(200).json(u);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
    //Register
    static async createUser(req, res, next){
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 10)
        });
        user.save(err=>{
            if(err){
                return res.status(400).json({
                    err: err
                })
            }
            return res.status(200).json({
                title: 'user submit successfully!!',
            })
        })
    }
    //Login
    static async login(req, res, next){
        User.findOne({ username: req.body.username}, (err, user) => {
            if(err){
                return res.status(500).json({
                    err: err
                })
            }
            if(!user){
                return res.status(401).json({
                    err: 'User not found! Do you want to create a new account??'
                })
            }
            if(!bcrypt.compareSync(req.body.password, user.password)){
                return res.status(401).json({
                    err: 'Wrong password!!'
                })
            }
            
            const token = jwt.sign({userID: user._id}, 'secretkey')
            return res.status(200).json({
                title: 'Logged in successfully ',
                token: token
            })


        })
    }

    //Grabbing User Info
    static async fetchUserByID(req, res, next){
        const token = req.headers.token;
        jwt.verify(token, 'secretkey', (err, decoded)=>{
            if(err){
                return res.status(401).json({
                    title: 'unauthorized'
                })
            }
            //token is valid
            User.findOne({_id: decoded.userID}, (err, user)=>{
                if(err) return console.log(err);
                // console.log(user);
                return res.status(200).json({
                    title: 'user grabbed',
                    user: {
                        name: user.name,
                        email: user.email,
                        username: user.username,
                    }
                })
            })
        })
    }

    //delete User
    // static async deleteUser(req, res, next){
    //     const id = req.params.id;
    //     try {
    //         const result = await User.findByIdAndDelete(id);
    //         if(result.image != ''){
    //             try {
    //                 fs.unlinkSync('../server/src/uploads/' + result.image);
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }
    //         res.status(201).json({message: 'User deleted successfully!!'})
    //     } catch (error) {
    //         res.status(400).json({message: error.message});
    //     }
    // }


    // add product to cart
    //Register
    static async addToCart(req, res, next){
        // const ProductID = req.params.id;
        // const product = await Product.findById(ProductID);

        // const quantity = req.body.quantity;
        // const name = product.name;
        // const price = product.price;

        const { productId, quantity, name, price } = req.body;


        var userId = '';
        const token = req.headers.token;
        jwt.verify(token, 'secretkey', (err, decoded)=>{
            if(err){
                return res.status(401).json({
                    title: 'unauthorized'
                })
            }
            userId = decoded.userID;
        })
        
        console.log(decoded.userID);

        try {
            let cart = await Cart.findOne({ userId });
        
            if (cart) {
              //cart exists for user
              let itemIndex = cart.products.findIndex(p => p.productId == productId);
        
              if (itemIndex > -1) {
                //product exists in the cart, update the quantity
                let productItem = cart.products[itemIndex];
                productItem.quantity = quantity;
                cart.products[itemIndex] = productItem;
              } else {
                //product does not exists in cart, add new item
                cart.products.push({ productId, quantity, name, price });
              }
              cart = await cart.save();
              return res.status(201).send(cart);
            } else {
              //no cart for user, create new cart
              const newCart = await Cart.create({
                userId,
                products: [{ productId, quantity, name, price }]
              });
        
              return res.status(201).send(newCart);
            }
        } catch (err) {
            console.log(err);
            res.status(500).send('Something went wrong');
        }
    }


}