import {Button} from "ui";
import styled from '@emotion/styled'
import {ErrorBoundary} from "./ErrorBoundary";
import {ButtonWorking} from "./ButtonWorking";

function App() {
  return (
    <div>
        <ErrorBoundary>
            <ButtonNew>Test</ButtonNew>
        </ErrorBoundary>
        <ErrorBoundary>
            <ButtonWorking>Test</ButtonWorking>
        </ErrorBoundary>
    </div>
  )
}

const ButtonNew = styled(Button)({
    fontSize: 50,
})

export default App
