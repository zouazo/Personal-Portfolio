import React from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const Skills = () => {
  return (
        <section id="skills">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Skills</h1>
        <div className="section--container">
          <KeyboardDoubleArrowDownIcon
          className="icon arrow"
          style={{ fontSize: '40px' }}
          onClick={() => { window.location.href='./#projects' }}
          />
          <div className="about-containers">
            <div className="details-container">
              <h2 className="skills-sub-title">Front-End</h2>
              <div className="article-container">
                <article>
                    <CheckBoxIcon 
                    className="icon"
                    style={{ fontSize: '30px' }}
                    />
                  <div>
                    <h3>ReactJS</h3>
                  </div>
                </article>
                <article>
                  <CheckBoxIcon 
                  className="icon"
                  style={{ fontSize: '30px' }}
                  />
                  <div>
                    <h3>Redux</h3>
                  </div>
                </article>
                <article>
                  <CheckBoxIcon 
                  className="icon"
                  style={{ fontSize: '30px' }}
                  />
                  <div>
                    <h3>BootStrap</h3>
                  </div>
                </article>
                <article>
                  <CheckBoxIcon 
                  className="icon"
                  style={{ fontSize: '30px' }}
                  />
                  <div>
                    <h3>HTML</h3>
                  </div>
                </article>
                <article>
                  <CheckBoxIcon 
                  className="icon"
                  style={{ fontSize: '30px' }}
                  />
                  <div>
                    <h3>CSS</h3>
                  </div>
                </article>
              </div>
            </div>


            <div className="details-container">
              <h2 className="skills-sub-title">Back-End</h2>
              <div className="article-container">
                <article>
                  <CheckBoxIcon 
                  className="icon"
                  style={{ fontSize: '30px' }}
                  />
                  <div>
                    <h3>Django</h3>
                  </div>
                </article>
                <article>
                  <CheckBoxIcon 
                  className="icon"
                  style={{ fontSize: '30px' }}
                  />
                  <div>
                    <h3>Postgres</h3>
                  </div>
                </article>
                <article>
                  <CheckBoxIcon 
                  className="icon"
                  style={{ fontSize: '30px' }}
                  />
                  <div>
                    <h3>Git</h3>
                  </div>
                </article>
              </div>
            </div>


            <div className="details-container">
            <h2 className="skills-sub-title">Languages</h2>
            <div className="article-container">
              <article>
                <CheckBoxIcon 
                className="icon"
                style={{ fontSize: '30px' }}
                />
                <div>
                  <h3>Python</h3>
                </div>
              </article>
              <article>
                <CheckBoxIcon 
                className="icon"
                style={{ fontSize: '30px' }}
                />
                <div>
                  <h3>JavaScript</h3>
                </div>
              </article>
              <article>
                <CheckBoxIcon 
                className="icon"
                style={{ fontSize: '30px' }}
                />
                <div>
                  <h3>C++</h3>
                </div>
              </article>
              <article>
              <CheckBoxIcon 
              className="icon"
              style={{ fontSize: '30px' }}
              />
              <div>
                <h3>C</h3>
              </div>
            </article>

            </div>
          </div>
          </div>
        </div>
      </section>
  )
}

export default Skills

