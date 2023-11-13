import React from 'react';
import {Button} from "react-bootstrap"
import Navigation from './Navigation';

const Resume = () => {
  return (
    <div className= "resume">
      <Button className= "resumeButton">
            <a href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:2755f31f-3bae-4f91-adba-862a4d7cb0e0">Click to view my resume</a>
            </Button>
    </div>
  );
};

export default Resume;