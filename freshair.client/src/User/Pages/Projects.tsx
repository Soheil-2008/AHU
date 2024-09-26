import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

type NewProject = {
  name: string;
  description: string;
};

const Projects = () => {
  const [openNewProjectDialog, setOpenNewProjectDialog] =
    useState<boolean>(false);

  const [newProjectData, setNewProjectData] = useState<NewProject>({
    name: "",
    description: "",
  });
  const handleAddProject = () => {
    console.log("Adding project");
  };
  return (
    <main className="container bg-gray-100">
      <div className="flex justify-between">
        <h1 className="text-xl ">Dashboard</h1>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => setOpenNewProjectDialog(true)}
        >
          Project
        </Button>

        <Dialog
          open={openNewProjectDialog}
          onClose={() => setOpenNewProjectDialog(false)}
          PaperProps={{
            component: "form",
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              handleAddProject();
            },
          }}
        >
          <DialogTitle>Add new project</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add a new project, please provide the following information:
            </DialogContentText>
            <TextField
              fullWidth
              required
              // autoFocus
              name="new-password"
              variant="standard"
              label="Project Name"
              value={newProjectData.name}
              onChange={(event) =>
                setNewProjectData({
                  ...newProjectData,
                  name: event.target.value,
                })
              }
              margin="normal"
            />
            <TextField
              fullWidth
              name="new-password"
              variant="standard"
              label="Project Description"
              value={newProjectData.description}
              onChange={(event) =>
                setNewProjectData({
                  ...newProjectData,
                  description: event.target.value,
                })
              }
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setOpenNewProjectDialog(false)}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button type="submit" variant="outlined">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </main>
  );
};

export default Projects;
