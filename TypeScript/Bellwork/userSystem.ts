enum Role {
    Admin = "Admin",
    Moderator = "Moderator",
    Member = "Member",
    Guest = "Guest",
}

enum Status {
    Active = "Active",
    Inactive = "Inactive",
    Suspend = "Suspend",
    Pending = "Pending",
}

interface User { 
    id: number; 
    username: string; 
    email: string; 
    role: Role; 
    status: Status; 
};

function canAccessAdminPanel(user: User): boolean {
    return (user.role === Role.Admin || user.role === Role.Moderator) && user.status === Status.Active;
}

const suspendInactiveUsers = (users: User[]): User[] =>
    users.map(user => user.status === Status.Inactive ? { ...user, status: Status.Suspend } : user);

    const users: User[] = [
        { id: 1, username: "Mr. Admin", email: "admin@example.com", role: Role.Admin, status: Status.Active },
        { id: 2, username: "Ms. Moderator", email: "moderator@example.com", role: Role.Moderator, status: Status.Inactive },
        { id: 3, username: "Sir Member", email: "member@example.com", role: Role.Member, status: Status.Pending },
        { id: 4, username: "Peasant Guest", email: "guest@example.com", role: Role.Guest, status: Status.Active },
    ];

    users.forEach(user => {
        console.log(`User ${user.username} can access admin panel: ${canAccessAdminPanel(user)}`);
    });

    const updatedUsers = suspendInactiveUsers(users);
    console.log("Updated Users:", updatedUsers);

    // Enums provide a clear and self-documenting way to define a set of related constants. 

    // Using readonly or immutability principles ensures that data cannot be accidentally modified after it is created. 

    // To scale this system, you could replace the Role enum with a database-driven approach. 

    //Extra Credit
    function filterUsersByRole(users: User[], role: Role): User[] {
        return users.filter(user => user.role === role);
    }

    const moderators = filterUsersByRole(users, Role.Moderator);
    console.log("Moderators:", moderators);