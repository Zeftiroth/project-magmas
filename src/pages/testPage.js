import * as React from "react"
import MainLayout from "../components/mainLayout"

const TestPage = () => {
    return (
      <div>
        <div>
          <MainLayout pageTitle="Test Page">
            <p>This is the Test Page</p>
          </MainLayout>
        </div>
      </div>
    );
}

export default TestPage