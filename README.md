## Path Finder Documentation

The Path Finder script is a web application that allows users to find the shortest path between a start point and an end point on a grid using the A\* algorithm. The grid is represented as a 12x12 matrix, and the start point is marked as yellow, while the endpoint is marked as red. Users can also draw walls on the grid to create obstacles for the pathfinding algorithm.

### Features

- Grid-based interface for visualizing pathfinding
- Start and end points marked as yellow and red, respectively
- Ability to draw walls on the grid
- Responsive design for better usability on different devices
- Run button to execute the A\* algorithm and find the shortest path
- Restart button to clear the grid and randomize the start and end points
- Delayed rendering of the path to visualize the algorithm's progress
- Path rendered as violet cells
- Legend to explain the colors used on the grid
- Responsive design for better usability on different devices

### Technologies Used

The Path Finder script is built using the following technologies:

- Vite: A fast web development build tool that provides a modern development workflow.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Tailwind CSS: A utility-first CSS framework used for styling and layout.
- Pathfinding Library: A library that implements the A\* algorithm for pathfinding.

### Getting Started

To use the Path Finder script locally, follow these steps:

1. Clone the repository to your local machine or download the source code as a ZIP file.
2. Open a terminal and navigate to the project directory.
3. Install the dependencies by running the command `npm install`.
4. Start the development server with the command `npm run dev`.
5. Open your web browser and visit the URL provided by the development server.

### Usage

Once the web page is loaded, you can interact with the Path Finder script as follows:

1. **View the Grid**: The grid is displayed on the screen as a 12x12 matrix of cells. Each cell has a default color.
2. **Draw Walls**: To create obstacles, you can click or click and drag on the grid to draw walls. Walls are represented by green cells. The A\* algorithm will consider these cells as obstacles when finding the shortest path.
3. **Run the Algorithm**: Click the run button to execute the A\* algorithm and find the shortest path between the start and endpoints. The algorithm will take into account the walls on the grid.
4. **Visualize the Path**: The algorithm's progress is visualized by rendering the path cells as violet. Each step of the pathfinding algorithm is rendered with a delay to provide a clear visualization.
5. **Restart**: If you want to start over, click the restart button. This will clear the grid and allow you to place the start and end points again.
6. **Legend**: On the right side of the grid, there is a legend that explains the meaning of each cell color.
