import React, { useState } from "react";
import classes from "./styles/app.module.css";

function App() {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.section}>
          <div className={classes.left}>
            <img src="/300x300.jpg" />
          </div>
          <div className={`${classes.right} ${classes.itCenter}`}>
            <div className={classes.title}>
              <h1>John Doe</h1>
              <h2>Web Developer</h2>
              <div>
                <div>
                  <strong>phone:</strong> 333/33333333
                </div>
                <div>
                  <strong>email:</strong> john.doe@webeetle.it
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.left}>
            <h3>ABOUT</h3>
            <h4>Lorem ipsum dolor</h4>
          </div>
          <div className={classes.right}>
            <div className={classes.wrap}>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In
                nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                pretium, ligula sollicitudin laoreet viverra, tortor libero
                sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
                justo. Suspendisse potenti. Nulla vitae mauris non felis mollis
                faucibus.
              </p>
              <p>
                Sed egestas, ante et vulputate volutpat, eros pede semper est,
                vitae luctus metus libero eu augue. Morbi purus libero, faucibus
                adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
                elementum hendrerit tortor. Sed semper lorem at felis.
                Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
                dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                dapibus eu, fermentum et, dapibus sed, urna. Fusce lacinia arcu
                et nulla. Nulla vitae mauris non felis mollis.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.left}>
            <h3>SKILL</h3>
            <h4>Lorem ipsum dolor</h4>
          </div>
          <div className={classes.right}>
            <div className={classes.skill}>
              <h4>HTML</h4>
              <p>
                Sed egestas, ante et vulputate volutpat, eros pede semper est,
                vitae luctus metus libero eu augue. Morbi purus libero, faucibus
              </p>
            </div>
            <div className={classes.skill}>
              <h4>CSS</h4>
              <p>
                Sed egestas, ante et vulputate volutpat, eros pede semper est,
                vitae luctus metus libero eu augue. Morbi purus libero, faucibus
                adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
              </p>
            </div>
            <div className={classes.skill}>
              <h4>Javascript</h4>
              <p>
                Sed egestas, ante et vulputate volutpat, eros pede semper est,
                vitae luctus metus libero eu augue. Morbi purus libero, faucibus
                adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
                elementum hendrerit tortor. Sed semper lorem at felis.
                Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
              </p>
            </div>
            <div className={classes.skill}>
              <h4>React</h4>
              <p>
                Sed egestas, ante et vulputate volutpat, eros pede semper est,
                dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                dapibus eu, fermentum et, dapibus sed, urna. Fusce lacinia arcu
                et nulla. Nulla vitae mauris non felis mollis.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.left}>
            <h3>EXPERIENCE</h3>
            <h4>Lorem ipsum dolor</h4>
          </div>
          <div className={classes.right}>
            <div className={classes.edu}>
              <div className="left">
                <h5>2018 - Today</h5>
                <h4>Webeetle</h4>
              </div>
              <div>
                <p>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero,
                  faucibus adipiscing, commodo quis, gravida id, est. Sed
                  lectus. Praesent elementum hendrerit tortor. Sed semper lorem
                  at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                  neque euismod
                </p>
              </div>
            </div>
            <div className={classes.edu}>
              <div className="left">
                <h5>2008 - 2018</h5>
                <h4>Google</h4>
              </div>
              <div>
                <p>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero,
                  faucibus adipiscing, commodo quis, gravida id, est. Sed
                  lectus. Praesent elementum hendrerit tortor. Sed semper lorem
                  at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                  neque euismod
                </p>
              </div>
            </div>
            <div className={classes.edu}>
              <div className="left">
                <h5>2003 - 2008</h5>
                <h4>Microsoft</h4>
              </div>
              <div>
                <p>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero,
                  faucibus adipiscing, commodo quis, gravida id, est. Sed
                  lectus. Praesent elementum hendrerit tortor. Sed semper lorem
                  at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                  neque euismod
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.left}>
            <h3>EDUCATION</h3>
            <h4>Lorem ipsum dolor</h4>
          </div>
          <div className={classes.right}>
            <div className={classes.edu}>
              <div className="left">
                <h5>2008 - 2012</h5>
                <h4>University of Salerno</h4>
              </div>
              <div>
                <p>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero,
                  faucibus adipiscing, commodo quis, gravida id, est. Sed
                  lectus. Praesent elementum hendrerit tortor. Sed semper lorem
                  at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                  neque euismod
                </p>
              </div>
            </div>
            <div className={classes.edu}>
              <div className="left">
                <h5>2003 - 2008</h5>
                <h4>Professional Course</h4>
              </div>
              <div>
                <p>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero,
                  faucibus adipiscing, commodo quis, gravida id, est. Sed
                  lectus. Praesent elementum hendrerit tortor. Sed semper lorem
                  at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                  neque euismod
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
