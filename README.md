# jot.

**_barebones._**

A lightweight to-do list built with React.

## Overview

jot. is a small to-do list app. You can add tasks, mark them as complete, and clear completed tasks.
Task data is saved to the browser, so your data persists across page refreshes. The app also supports a manual
light/dark mode toggle.

## How to Run

```bash
git clone https://github.com/thomasha1310/jot-barebones.git
cd jot-barebones
npm install
npm run dev
```

## My Contribution

I built this website myself, including the `TodoItem` and `NewTodoItem` components and to-do list functionality.

## What I Learned

I initially gave `TodoItem` its own local `completed` state with `useState`. This caused
task updates (i.e., toggling completion) to update the task's own appearance (color,
checkbox, strikethrough) without updating the parent `App`. I discovered this when
implementing the "clear completed tasks" button, which failed to clear tasks that I thought
were marked completed. I fixed the issue by moving the state to the parent `App`, which
passes each task's status down as a prop with an `onToggle` to report changes.

## References

- [React documentation](https://react.dev/learn)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [Vite documentation](https://vite.dev)
- [Gaegu font](https://fonts.google.com/specimen/Gaegu) (Google Fonts)
- [Lucide](https://lucide.dev/) for icons
