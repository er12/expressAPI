import { Request, Response } from 'express';
import prisma from '../prisma';
import { Color } from '@prisma/client';

interface ColorMap {
    [key: string]: Color;
}

const colorMap: ColorMap = {
    "0": Color.RED,
    "1": Color.ORANGE,
    "2": Color.YELLOW,
    "3": Color.GREEN,
    "4": Color.BLUE,
    "5": Color.INDIGO,
    "6": Color.PINK,
    "7": Color.BROWN,
};


// Get all tasks
export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await prisma.task.findMany();
        res.json(tasks);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

// Create a new task
export const createTask = async (req: Request, res: Response) => {
    const { title, color } = req.body;

    const colorString: string = color?.toString();


    if (!title || !colorString) {
        res.status(400).json("Missing params");
        return;
    }

    try {
        const task = await prisma.task.create({
            data: { title, color: colorMap[colorString] },
        });
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

// Get a single task by ID
export const getTaskById = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
        res.status(400).json("Invalid ID");
        return;
    }

    try {
        const task = await prisma.task.findUnique({
            where: { id: Number(id) },
        });
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

// Update a task
export const updateTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, color, completed_status } = req.body;

    const toogleCompletedStatus = !completed_status;

    if (!id) {
        res.status(400).json("Missing ID");
        return;
    }

    try {
        const task = await prisma.task.update({
            where: { id: Number(id) },
            data: { title, color, completed_status: toogleCompletedStatus },
        });
        res.json(task);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

// Delete a task
export const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const task = await prisma.task.delete({
            where: { id: Number(id) },
        });
        res.json(task);
    } catch (error) {
        res.status(400).json({ error: error });
    }
};
