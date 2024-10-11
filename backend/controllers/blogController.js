const getBlogs = (req, res) => {
  res.status(200).json({message : "Get all blogs"});
}
const getBlog = (req, res) => {
  res.status(200).json({message : `blog ${req.params.id}`});
  }
const createBlog = (req, res) => {
  console.log("Data ", req.body);
  const data = req.body
  res.status(201).json({message : `Blog created ${data.nomber}`});
}
const updateBlogs = (req, res) => {
  res.status(200).json({message : `Blog updated ${req.params.id}`});
}
const deleteBlogs = (req, res) => {
  res.status(200).json({message : "Get all blogs"});
}

module.exports = {getBlogs, getBlog, createBlog, updateBlogs, deleteBlogs}