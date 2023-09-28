/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../app/store'
import { updateUserData } from '../../../features/imagesSlice'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProfileUpdate({id, token}: any) {
    const [img, setImg] = React.useState<File | null>(null)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    // const [image, setImage] = useState('')
    let image = ''
    
    
    const dispatch = useDispatch<AppDispatch>()

    const handlePatch = async () => {
        try {
            const data = new FormData()
            data.append('avatar', img)
            await axios.post(`http://localhost:3333/image`, data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }).then(res => image = res.data)
            console.log(image);
            
            dispatch(updateUserData({id, token, name, password, image}))
        } catch (error) {
            console.log(error);
        }
    }
    
  return (
    <div>
        
        <input type="text" placeholder='имя'onChange={(e) => setName((x) => e.target.value)} />
        <input type="text" placeholder='пароль' onChange={(e) => setPassword((x) => e.target.value)} />
       
        <input type="file" onChange={(e) => setImg((x) => e.target.files[0])}/>
        <button onClick={() => handlePatch()}>Update</button>
    </div>
  )
}

export default ProfileUpdate