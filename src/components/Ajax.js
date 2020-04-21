import React, {useState, useCallback} from "react"
import axios from 'axios'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

/** @jsx jsx */
import { jsx, css } from "@emotion/core"

export default (props) => {
  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [isErrorName, setIsErroName] = useState(false)

  const handleClick = useCallback(async () => {
    const {data} = await axios.get('https://api.unsplash.com/photos/random?client_id=5fuoJBe2Xrm0U7skqxJ_OON9BMDidgL6xrw5e7FIPEE')
    setImage(data.urls.small)
  }, [])

  const handleChange = (e) => {
    const name = e.target.value
    setName(name)
    if(name.length === 0) {
      setIsErroName(true)
      return 
    } 
      setIsErroName(false)
  }

  return (
    <div css={{height: '300px', display: 'flex',background:'gray', margin: '10px', padding: '10px', justifyContent: 'space-between'}}>
        <div css={{width: '20%'}}>
        <Button onClick={handleClick} variant="contained" color="primary">Ajax通信を行うボタン</Button>
      </div>
        <div css={{width: '50%'}}>
          {image && <img src={image} css={{maxWidth: '100%', maxHeight: '100%'}}/>}
        </div>
        <div css={{width: '30%'}}>
          <TextField 
            value={name} 
            onChange={handleChange} 
            error={isErrorName}  
            id="outlined-error-helper-text"
            helperText={`${isErrorName ? '入力してください': ''}`}
            />
        </div>
    </div>
  )
}