
const About = () => {
  return (
    <div className="h-screen px-40 mx-auto pt-32 p-10">
      <h1 className="text-4xl font-bold pb-4">ABOUT PAGE</h1>
      <hr />
      <div className="flex py-10 gap-32">
        <div>
          <h1 className="text-4xl font-bold pb-4">What is GDGC_ACE ?</h1>
          <p className="text-xl ">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
          <button className="p-4 my-5 bg-[#FEBB00] rounded-lg border">Want to be part of it ?</button>
        </div>
        <img src="https://images.unsplash.com/photo-1551677629-c3e314ecf29c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" className="w-1/2 object-cover rounded-md" />
      </div>
    </div>
  )
}

export default About
