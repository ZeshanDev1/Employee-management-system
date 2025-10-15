
const employees = [
  {
    id: 1,
    firstName: "Ali",
    email: "ali.khan@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Monthly Report",
        description: "Compile sales and performance data for the month.",
        date: "2025-01-10",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client Follow-up",
        description: "Reach out to clients for project updates.",
        date: "2025-01-12",
        category: "Communication",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team Meeting",
        description: "Attend the weekly strategy meeting.",
        date: "2025-01-08",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    firstName: "Sana",
    email: "sana.rafique@example.com",
    password: "123",
    tasks: [
      {
        title: "Update Website Content",
        description: "Revise homepage sections and add new blog posts.",
        date: "2025-01-09",
        category: "Content",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Social Media Strategy",
        description: "Plan posts for the upcoming marketing campaign.",
        date: "2025-01-11",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Product Feedback Review",
        description: "Analyze customer reviews and suggest improvements.",
        date: "2025-01-07",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Create Presentation",
        description: "Design slides for the client pitch.",
        date: "2025-01-13",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskSummary: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 3,
    firstName: "Zeshan",
    email: "zeshan.hassan@example.com",
    password: "123",
    tasks: [
      {
        title: "Bug Fixing",
        description: "Resolve frontend form validation issues.",
        date: "2025-01-08",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "API Integration",
        description: "Connect payment gateway to backend.",
        date: "2025-01-10",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write Test Cases",
        description: "Add unit tests for login and register modules.",
        date: "2025-01-12",
        category: "Testing",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Refactor Codebase",
        description: "Improve reusability and remove dead code.",
        date: "2025-01-14",
        category: "Optimization",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Deployment",
        description: "Deploy updated app version to staging server.",
        date: "2025-01-06",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskSummary: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 4,
    firstName: "Aisha",
    email: "aisha.ahmed@example.com",
    password: "123",
    tasks: [
      {
        title: "Data Entry",
        description: "Enter new lead information into CRM.",
        date: "2025-01-07",
        category: "Administration",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Email Campaign",
        description: "Send promotional emails to subscribers.",
        date: "2025-01-11",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Inventory Check",
        description: "Verify stock levels in storage.",
        date: "2025-01-08",
        category: "Operations",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 5,
    firstName: "Umer",
    email: "umer.ali@example.com",
    password: "123",
    tasks: [
      {
        title: "Server Maintenance",
        description: "Update security patches and restart services.",
        date: "2025-01-09",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Database Backup",
        description: "Create scheduled backups of production database.",
        date: "2025-01-10",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Access Setup",
        description: "Grant VPN access to new employees.",
        date: "2025-01-12",
        category: "Support",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "System Audit",
        description: "Review logs and report issues.",
        date: "2025-01-05",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  }
];

const admin = [
  {
    id: 100,
    firstName: "Admin",
    email: "admin@example.com",
    password: "123"
  }
];



export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin    = JSON.parse(localStorage.getItem('admin'))
    
     return {employees,admin}
}