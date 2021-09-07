import React, {useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux'
import { uploadSheet, resetData } from '../../Redux/Actions/dataActions'

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond'

// Import the plugin code
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

// Import FilePond styles
import 'filepond/dist/filepond.min.css'



function ModalContent(props) {
	const [disabled, setDisabled] = useState(true)
	
	const [requestData, setRequestData] = useState({
		composer: props.sheet.composer,
		sheetName: props.sheet.sheet_name,
		releaseDate: "1999-12-31"
	})

	const [pdfChange, setPdfChange] = useState(false)

	const [uploadFile, setUploadFile] = useState(dataURLtoFile(arrayBufferToBase64(props.uploadFile.data, "pdf"), `${props.sheet.sheet_name}.pdf`))

	const giveModalData = (file) => {
		setUploadFile(file)
	}

	useEffect(() => {
		console.log(uploadFile);
		if (requestData.composer != props.sheet.composer || requestData.sheetName != props.sheet.sheet_name || pdfChange){
			if (requestData.composer != "" && requestData.sheetName != "" && uploadFile != undefined) {
				setDisabled(false)
			} else if (uploadFile == undefined) {
				setDisabled(true)
			}
		} else { setDisabled(true) }

	}, [requestData, uploadFile])

	const handleChange = (event) => {
        setRequestData({
			...requestData,
			[event.target.name]: event.target.value
		})    
    }


	function arrayBufferToBase64(Arraybuffer, Filetype) {
        let binary = '';
        const bytes = new Uint8Array(Arraybuffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        const file = window.btoa(binary);
        const mimType = Filetype === 'pdf' ? 'application/pdf' : Filetype === 'xlsx' ? 'application/xlsx' :
          Filetype === 'pptx' ? 'application/pptx' : Filetype === 'csv' ? 'application/csv' : Filetype === 'docx' ? 'application/docx' :
            Filetype === 'jpg' ? 'application/jpg' : Filetype === 'png' ? 'application/png' : '';
		
		const url = `data:${mimType};base64,` + file;
	    return url
	}

	function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new File([u8arr], filename, {type:mime});
    }

	const sendRequest = () => {

		const newData = {
			...requestData,
			uploadFile: uploadFile
		}

		const makeCalls = (_callback) => {
			props.uploadSheet(newData, () => {
				props.resetData()
				props.onClose()
				_callback()
			})
		}
		
		makeCalls(() => window.location.reload())
	}

		
	const uploadFinish = (files) => {
		//giveModalData(files[0].file)
	}
	
	const removeFile = () => {
		setPdfChange(true)
		giveModalData(undefined)
	}

	return (
		<div className="upload">
			<form noValidate autoComplete="off">
  				<TextField id="standard-basic" label="Sheet Name" className="form-field" name="sheetName" onChange={handleChange} value={requestData.sheetName}/>
				<TextField id="standard-basic" label="Composer" className="form-field comp" name="composer" onChange={handleChange} value={requestData.composer}/>
				
			</form>
			<div className="upload-container">
				<FilePond
					files={[uploadFile]}
					onupdatefiles={(files) => {
						uploadFinish(files)  
					}}
					
					allowMultiple={false}
					server={ {
					process: (fieldName, file, metadata, load, error, progress, abort, transfer, options) => {
						load()
					}}}
					maxFiles={1}
					name="files"
					labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
					credits={false}
					allowFileTypeValidation={true}
					acceptedFileTypes={['application/pdf']}
				/>
			</div>
			<Button variant="contained" color="primary" disabled={disabled} onClick={sendRequest}>
				Upload
			</Button>
		</div>
	)
}


const mapActionsToProps = {
    uploadSheet,
	resetData
}

const mapStateToProps = (state) => ({
	
})

export default connect(mapStateToProps, mapActionsToProps)(ModalContent)
