const express = require('express');

const authMiddleware = require('../middlewares/auth');

const Project = require('../models/project');
const Task = require('../models/task');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (request, response) => {
    try {

        const projects = await Project.find().populate(['user', 'tasks']);
        return response.send({projects});

    } catch (err) {
        console.log(err);
        return response.status(400).send({error: 'Error loading projects.'})
    }
});

router.get('/:projectId', async (request, response) => {
    try {

        const project = await Project.findById(request.params.projectId).populate(['user', 'tasks']);
        return response.send({project});

    } catch (err) {
        console.log(err);
        return response.status(400).send({error: 'Error loading project.'})
    }
});

router.post('/', async (request, response) => {
    try {

        const { title, description, tasks } = request.body;

        const project = await Project.create({ title, description, user: request.userId });

        await Promise.all(tasks.map(async task => {
            const projectTask = new Task({ ...task, project: project._id });
            await projectTask.save();
            project.tasks.push(projectTask);
        }));

        await project.save();

        return response.send({project});

    } catch (err) {
        console.log(err);
        return response.status(400).send({error: 'Error creating new project.'});
    }
});

router.put('/:projectId', async (request, response) => {
    try {
        const { title, description, tasks } = request.body;

        const project = await Project.findByIdAndUpdate(request.params.projectId, { 
            title, 
            description
        }, { new: true });

        project.tasks = [];
        await Task.remove({ project: project._id });

        await Promise.all(tasks.map(async task => {
            const projectTask = new Task({ ...task, project: project._id });
            await projectTask.save();
            project.tasks.push(projectTask);
        }));

        await project.save();

        return response.send({project});
    } catch (err) {
        console.log(err);
        return response.status(400).send({error: 'Error updating project.'});
    }
});


router.delete('/:projectId', async (request, response) => {
    try {

        await Project.findByIdAndRemove(request.params.projectId);
        return response.send();

    } catch (err) {
        console.log(err);
        return response.status(400).send({error: 'Error deleting project.'});
    }
});

module.exports = app => app.use('/projects', router);