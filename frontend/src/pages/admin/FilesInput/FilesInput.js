import React, { useState, useEffect, useRef } from 'react'

import api from '../../../services/api'

export default function FilesInput(){

    const [file, setFile] = useState()
    const [preview, setPreview] = useState()
    
    const ref = useRef()

    async function handleChange(e){
        const data = new FormData()

        data.append('file', e.target.files[0])

        const response = await api.post('files', data)

        const { id, url } = response.data

        setFile(id)
        setPreview(url)
    }

    return (
        <div>
            <label htmlFor="file">
                <img src={preview || "https://www.hanselman.com/blog/content/binary/Windows-Live-Writer/There-is-only-one-Cloud-Icon-in-the-Enti_137BD/image_d64843a5-92db-44cd-98ec-cc1f74c05526.png"} alt=""/>
                <input 
                    type="file"
                    id="file"
                    data-file={file}
                    accept="image/*"
                    ref={ref}
                    onChange={handleChange}
                />
            </label>
        </div>
    )
}