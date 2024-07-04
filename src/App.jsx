
import QuestionPaper from './components/QuestionPaper';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @page {
        size: A4;
        margin: 20mm;
    }

    @media print {
        body {
            margin: 0;
        }
    }
`;
function App() {

  return (
    <>
     <GlobalStyle />
      <QuestionPaper />
    </>
  )
}

export default App
