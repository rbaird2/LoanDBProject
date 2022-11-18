const loans = require('../dev-data/data/loans.json')
const customers = require('../dev-data/data/customers.json')
// const User = require('./../models/userModel');
// const APIFeatures = require('./../dataBaseManager/loanDbContext');


exports.getCustomerList = async (req, res) => {
  res.status(200).render('customerList', {
    customers: customers, 
    title: `Get Customer`
  });
};

exports.getLoanList = async (req, res) => {
  res.status(200).render('loanList', {
    loans: loans, 
    title: `Get Loan`
  });
};

exports.getLandingPAge = async (req, res) => {
  res.status(200).render('overview', {
    title: `Over View`
  
  });
};

exports.getCourse = async (req, res) => {
  res.status(200).render('Course', {
    title: `Get Course`
  });
};

exports.createNewCourse = async (req, res) => {
  res.status(200).render('newCourse', {
    title: `Create New Course`
  });
};

exports.getSignInForm = (req, res) => {
  res.status(200).render('newUser', {
    title: 'Sign in New User'
  });
};
exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

exports.getLoginUser = (req, res) => {
  const {email, password} = req.body;
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

// exports.getAllUsers =   async (req, res) => {
//   try {
//     // EXECUTE QUERY
//     const features = new APIFeatures(User.find(), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate();
//     const users = await features.query;

//     // SEND RESPONSE
//     res.status(200).json({
//       status: 'success',
//       results: users.length,
//       data: {
//         users
//       }
      
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err
//     });
//   }
// };
