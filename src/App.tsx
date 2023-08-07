import React from 'react';
import './App.css';
import { useAppSelector, globalSelector, useAppDispatch, teamSelector } from './store';
import { getAllTeamsActionDispatch, getAllTeamsDispatch, getAllTeamsMatcher } from './store/team/actions';

function App() {
  // Load state from slices
  const { loading } = useAppSelector(globalSelector);
  const { teams } = useAppSelector(teamSelector);

  // Use dispatch hook
  const dispatch = useAppDispatch();

  /**
   * @desc gets NBA teams
   */
  const handleGetTeamsMatcher = () => {
    // Dispatch async thunk
    dispatch(getAllTeamsMatcher())
  }

   /**
   * @desc gets NBA teams
   */
  const handleGetTeamsDispatch = () => {
    // Dispatch async thunk
    dispatch(getAllTeamsDispatch())
  }

   /**
   * @desc gets NBA teams
   */
  const handleGetTeamsActionDispatch = () => {
    // Dispatch action
    dispatch(getAllTeamsActionDispatch())
  }

  return (
    <div className="App">
      <header className="App-header">
        <div 
          style={{
            display: 'flex', 
            flexDirection: 'column',
            paddingBottom: '1rem'
          }}
        >
          <p>Current loading state: {loading.toString()}</p>

          <button 
            style={{
              marginBottom: '1rem',
              padding: '0.8rem',
              fontSize: '1rem',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer'
            }} 
            onClick={() => handleGetTeamsMatcher()}
          >
            Fetch teams async thunk matchers changing state
          </button>
          <button
            style={{
              marginBottom: '1rem',
              padding: '0.8rem',
              fontSize: '1rem',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer'
            }} 
            onClick={() => handleGetTeamsDispatch()}
          >
            Fetch teams async thunk dispatch changing state
          </button>
          <button
             style={{
              marginBottom: '1rem',
              padding: '0.8rem',
              fontSize: '1rem',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer'
            }} 
            onClick={() => handleGetTeamsActionDispatch()}
          >
            Fetch teams action dispatch changing state
          </button>

          <p>Teams: </p>
          {
            teams.map((singleTeam) => {
              return <p key={singleTeam.id} style={{margin: '0.2rem'}}>{singleTeam.full_name}</p>
            })
          }
        </div>
     
      </header>
      
    </div>
  );
}

export default App;
