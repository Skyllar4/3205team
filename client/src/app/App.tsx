import React from 'react';
import "./main.scss";
import MainPage from 'pages/MainPage';
import FindUserForm from 'widgets/FindUserForm';
import ResultContainer from 'widgets/ResultContainer';

function App() {
  return (
        <MainPage>
            <FindUserForm />
            <ResultContainer />
        </MainPage>
  );
}

export default App;
