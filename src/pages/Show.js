import { useLoaderData, Form } from 'react-router-dom'

const Show = (props) => {

        const person = useLoaderData()
   
    return <div className='person'>
        <h1>{person.name}</h1>
        <h2>{person.title}</h2>
        <img src={person.image} alt={person.name}/>
      

<h2>Update {person.name}</h2>
<Form action={`/update/${person._id}`} method="post">
    <input type="text" name="name" placeholder="person's name" defaultValue={person.name}/>
    <input type="text" name="title" placeholder="person's title" defaultValue={person.title}/>
    <input type="text" name="image" placeholder="person's image" defaultValue={person.image}/>
    <input type="submit" value="Update Person"/>
</Form>

<h2>Delete {person.name}</h2>
    <Form action={`/delete/${person._id}`}
    method='post'>
        <input type='submit' value='Delete this PoS'/>
    </Form>

</div>
}


export default Show;