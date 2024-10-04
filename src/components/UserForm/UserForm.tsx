


const UserForm = () => {
    return (
        <form className="w-50 mt-4">
            <input type="text" name="name" id="name" className="form-control mb-2" placeholder="Enter user name" required />
            <input type="text" name="email" id="email" className="form-control mb-2" placeholder="Enter email" required />
            <label htmlFor="status">Status</label>
            <input type="checkbox" name="status" id="status" className="form-check-input mb-2 ms-2" required />
            <select name="role" id="role" className="form-control mb-2" required>
                <option value="">Select role</option>
                <option value="user">User</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
            </select>
            <button type="submit" className="btn btn-success w-100">Save</button>
        </form>
    );
};

export default UserForm;