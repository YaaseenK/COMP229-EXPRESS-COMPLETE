let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a referance to the model => the db schema
let Book = require('../models/book');

module.exports.displayBookList = (req, res , next) => {
    Book.find((err, bookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('book/list', 
            {title: 'Books', 
            BookList: bookList,
            displayName: req.user ? req.user.displayName : ''});
        }
    });
};

module.exports.displayAddPage = (req, res, next) => {
    res.render('book/add', {title: 'Add Book'})
};

module.exports.procressAddPage = (req, res, next) => {
    let newBook = Book({
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "cost": req.body.cost
    });

    Book.create(newBook, (err, Book) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list 
            res.redirect('/book-list');
        }
    });
};

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Book.findById(id, (err, bookToEdit)=> {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view 
            res.render('book/edit', {title: 'Edit Book', book: bookToEdit,
            displayName: req.user ? req.user.displayName : ''})
        }
    });
};

module.exports.procressEditPage = (req, res, next) => {
    let id = req.params.id
    
    let updatedBook = Book({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "cost": req.body.cost
    });
    Book.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refesh the book list
            res.redirect('/book-list');
        }
    });
};

module.exports.preformDelete = (req, res, next) => {
    let id= req.params.id;
    
    Book.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else 
        {
              //refesh the book list
              res.redirect('/book-list');
        }
    });

};