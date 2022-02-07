import { render, screen } from '@testing-library/react';
import App from './App';
import Sidebar from './components/Sidebar';
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { data } from "./data"

let container = null;
 let notes = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  notes = data;
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  notes = null;
});

test('Sidebar renders properly', () => {
  const mockFn = jest.fn();

    act(() => {    
      render(
        <Sidebar
          notes={notes}
          currentNote={1}
          setCurrentNoteId={mockFn}
          newNote={mockFn}
          deleteNote={mockFn}
      />, container);  
    });  
    
    expect(document.getElementsByClassName("note").length).toEqual(notes.length);
});


test('Sidebar functions properly', () => {
  const currentNoteId = notes[0].id;
  const mockSelectId = jest.fn((id) => id);
  const mockFn = jest.fn();
    act(() => {    
      render(
        <Sidebar
          notes={notes}
          currentNote={currentNoteId}
          setCurrentNoteId={mockSelectId}
          newNote={mockFn}
          deleteNote={mockFn}
      />, container);  
    });  

    // click new note Button
    const newNoteButton = document.querySelector(".new-note");
    expect(newNoteButton).toBeDefined();
    act(() => {
      newNoteButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(mockFn).toHaveBeenCalledTimes(1);

    // make sure next note passes correct id
    const nextNote = document.getElementsByClassName("note")[1];
    expect(nextNote).toBeDefined();
    act(() => {
      nextNote.querySelector(".title").dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(mockSelectId).toHaveBeenCalledTimes(1);
    expect(mockSelectId).toHaveBeenCalledWith(currentNoteId+1);
    
});



