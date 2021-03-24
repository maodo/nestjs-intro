export default () => ({
  mongoUrl:
    process.env.MONGODB_URL ||
    'mongodb+srv://maodo:nestjsdb@cluster0.sdx6d.mongodb.net/nestjsdb?retryWrites=true&w=majority',
});
