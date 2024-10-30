const Blog = require('../models/blogModel.js')

// Get all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find()
    res.status(200).json(blogs)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get a single blog by ID
const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' })
    }
    res.status(200).json(blog)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Create a new blog
const createBlog = async (req, res) => {
  const { title, content, images, author, tags, isPublished } = req.body
  const blog = new Blog({
    title,
    content,
    images,
    author,
    tags,
    isPublished,
  })

  try {
    const newBlog = await blog.save()
    res.status(201).json(newBlog)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Update an existing blog by ID
const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' })
    }
    res.status(200).json(updatedBlog)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete a blog by ID
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id)
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' })
    }
    res.status(200).json({ message: 'Blog deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const searchBlogs = async (req, res) => {
  const { query } = req.query
  
  if (!query) {
    return res.status(400).json({ message: 'Search query is required' })
  }

  try {
    const blogs = await Blog.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { content: { $regex: query, $options: 'i' } } 
      ]
    })

    if (blogs.length === 0) {
      return res.status(404).json({ message: 'No blogs found' })
    }

    res.status(200).json(blogs)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { getBlogs, getBlog, createBlog, updateBlog, deleteBlog, searchBlogs}
