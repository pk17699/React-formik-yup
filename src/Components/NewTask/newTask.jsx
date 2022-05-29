import React from 'react'
import { useFormik } from 'formik'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material'
import { useState } from 'react';
import * as yup from 'yup';

const taskSchema = yup.object({
    taskName:yup
    .string("Enter the task name")
    .required("name is required")
    .email(),
    taskDescription:yup
    .string("Enter task description")
    .required("description is required")
    .min(10, "min 10 char is required")
})

const NewTask = () => {

    const taskFormik = useFormik({
        initialValues:{
            taskName:"",
            taskDescription:""
        },
        validationSchema: taskSchema,
        onSubmit:(values)=>{
            console.log(values);
        }
    })

    return(
        <Box component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
            <br></br>
            <br></br>
            <div>
                <TextField
                required
                id="outlined-required"
                label="Task Name"
                placeholder="enter task name"
                name="taskName"
                value={taskFormik.values.taskName}
                onChange={taskFormik.handleChange}
                error={taskFormik.touched.taskName && Boolean(taskFormik.errors.taskName)}
                helperText={taskFormik.touched.taskName && taskFormik.errors.taskName}
                />
                <br></br>
                <br></br>
                <br></br>
                <TextField
                required
                id="outlined-required"
                label="Task Description"
                placeholder="enter task description"
                name="taskDescription"
                value={taskFormik.values.taskDescription}
                onChange={taskFormik.handleChange}
                error={taskFormik.touched.taskDescription && Boolean(taskFormik.errors.taskDescription)}
                helperText={taskFormik.touched.taskDescription && taskFormik.errors.taskDescription}
                />
            </div>
            <br></br>
            <br></br>
            <Button variant="contained" onClick={taskFormik.handleSubmit}>Save</Button>
            <br></br>
            <br></br>
        </Box>
    )
}
export default NewTask