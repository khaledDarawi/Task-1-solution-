express = require('express')
app = express()
port = 3000
app.use(express.json())

const todol=[]
app.get('/todos', (req, res) => {
   console.log(res.json(todol));
   });
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin , 
    output:process.stdout
})

rl.question("press:\n 1-to retrive al to-do items\n 2-to add tasks to to-do list\n 3-for retrive a specific task by ID\n 4-to update a field in a task by ID\n 5-to delete a specific task " , (input)=>{
    const number=Number(input)

   
if(number <1 || number>5){
    console.log("Invalid number please try again (choose between 1 and 5")
}
else if(number==1){
app.get('/todos' , (req , res)=>{
    res.json({mesage:"We retrive all to-do items"})

});
}

else if(number==2){
app.post('/todos' , (req , res)=>{
    const newToDo = req.body
    console.log(newToDo)
    res.json({message : "Added new task"})
})
}
else if(number==3){
app.get('/todos/:id', (req, res) => {
    const TaskID = req.params.id;
    console.log("Task ID from URL:", TaskID);  

    res.json({
        message: "The task you asked for by ID is returned.",
        taskId: TaskID
    });  
});
}

else if(number==4){
app.put('/todos/:id',(req , res)=>{
    const todosID = req.params.id
    const newToDoId= req.body
    console.log(newToDoId)
    res.json({message:"updated the task you want to do",newToDoId})
})
}

else if(number==5){
app.delete('/todos/:id',(req , res)=>{
    const deleteItem = req.params.id
    console.log(deleteItem)
    res.json({message:"we delete the id"})
})
}
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})