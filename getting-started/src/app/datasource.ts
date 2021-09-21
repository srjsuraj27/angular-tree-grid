export let sampleData: Object[] = [
    {
        taskID: 1,
        taskName: "Planning",
        startDate: new Date("02/03/2017"),
        endDate: new Date("02/07/2017"),
        progress: 100,
        duration: 5,
        priority: "Normal",
        approved: false,
        isInExpandState: true,
        subtasks: [
            { taskID: 2, taskName: "Plan timeline", startDate: new Date("02/03/2017"), endDate: new Date("02/07/2017"), progress: 100, duration: 3, priority: "Normal", approved: false },
            { taskID: 3, taskName: "Plan budget", startDate: new Date("02/03/2017"), endDate: new Date("02/07/2017"), progress: 100, duration: 0, approved: true },
            { taskID: 4, taskName: "Allocate resources", startDate: new Date("02/03/2017"), endDate: new Date("02/07/2017"), progress: 100, duration: 2, priority: "Critical", approved: false },
            { taskID: 5, taskName: "Planning complete", startDate: new Date("02/07/2017"), endDate: new Date("02/11/2017"), progress: 0, duration: 3, priority: "Low", approved: true },
        ]
    },
    {
        taskID: 6,
        taskName: "Design",
        startDate: new Date("02/10/2017"),
        endDate: new Date("02/14/2017"),
        progress: 86,
        duration: 3,
        priority: "High",
        approved: false,
        isInExpandState: false,
        subtasks: [
            { taskID: 7, taskName: "Software Specification", startDate: new Date("02/10/2017"), endDate: new Date("02/14/2017"), progress: 60, duration: 3, priority: "Normal", approved: false },
            { taskID: 8, taskName: "Develop prototype", startDate: new Date("02/10/2017"), endDate: new Date("02/14/2017"), progress: 100, duration: 3, priority: "Critical", approved: false },
            { taskID: 9, taskName: "Get approval from customer", startDate: new Date("02/13/2017"), endDate: new Date("02/17/2017"), progress: 100, duration: 2, approved: true },
            { taskID: 10, taskName: "Design Documentation", startDate: new Date("02/13/2017"), endDate: new Date("02/17/2017"), progress: 100, duration: 2, approved: true },
            { taskID: 11, taskName: "Design complete", startDate: new Date("02/14/2017"), endDate: new Date("02/18/2017"), progress: 0, duration: 0, priority: "Normal", approved: true },
        ]
    },
    {
        taskID: 12,
        taskName: "Implementation",
        startDate: new Date("02/15/2017"),
        endDate: new Date("02/19/2017"),
        duration: 11,
        priority: "Normal",
        approved: false,
        subtasks: [
            { taskID: 13, taskName: "Design", startDate: new Date("02/10/2017"), endDate: new Date("02/14/2017"), progress: 86, duration: 3, priority: "High", approved: false, isInExpandState: false },
        ]
    }
];