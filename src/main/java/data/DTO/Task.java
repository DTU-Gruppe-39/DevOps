package data.DTO;

import java.util.ArrayList;
import java.util.List;

public class Task {
    private String name;
    private String description;
    private int id;
    private List<UserTest> taskWorkers = new ArrayList<UserTest>();
    private TaskStatus status;

    public Task(String name, String description, int id){
        this.name=name;
        this.description=description;
        this.id=id;
        this.status = TaskStatus.NotStarted;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<UserTest> getTaskWorkers() {
        return taskWorkers;
    }

    public TaskStatus getStatus() {
        return status;
    }

    public void setStatus(TaskStatus status) {
        this.status = status;
    }

    public void addTaskWorker(UserTest worker){
        this.taskWorkers.add(worker);
    }
}
