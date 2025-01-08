import { useState, useEffect } from "react";
import { devSkills } from "../../constants/AllSkills";
import { Skill } from "../../components/pages";


const Skills = () => {

    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [nodeJs, setNodeJs] = useState(0);
    const [reactJs, setReactJs] = useState(0);
    const [git, setGit] = useState(0);
    const [javascript, setJavascript] = useState(0); 

    useEffect(() => {
        const timer = setInterval(() => {
            setJavascript(prevProgress => {
                const diff = Math.random() * 10;
                return Math.min(prevProgress + diff, 82);
            })
            setHtml(prevProgress => {
                const diff = Math.random() * 10;
                return Math.min(prevProgress + diff, 95);
            })
            setCss(prevProgress => {
                const diff = Math.random() * 10;
                return Math.min(prevProgress + diff, 80);
            })
            setNodeJs(prevProgress => {
                const diff = Math.random() * 10;
                return Math.min(prevProgress + diff, 70);
            })
            setReactJs(prevProgress => {
                const diff = Math.random() * 10;
                return Math.min(prevProgress + diff, 60);
            })
            setGit(prevProgress => {
                const diff = Math.random() * 10;
                return Math.min(prevProgress + diff, 50);
            })
        }, 50);

        return () => {
            clearInterval(timer);
        }

    }, [])

    const { htmlSkill, cssSkill, jsSkill, nodeSkill, reactSkill, gitSkill } = devSkills;

    return (
        <>
            <Skill name={htmlSkill.name}
                icon={htmlSkill.icon}
                color={htmlSkill.color}
                value={html}
            />
            <Skill name={cssSkill.name}
                icon={cssSkill.icon}
                color={cssSkill.color}
                value={css}
            />
            <Skill name={jsSkill.name}
                icon={jsSkill.icon}
                color={jsSkill.color}
                value={javascript}
            />
            <Skill name={nodeSkill.name}
                icon={nodeSkill.icon}
                color={nodeSkill.color}
                value={nodeJs}
            />
            <Skill name={reactSkill.name}
                icon={reactSkill.icon}
                color={reactSkill.color}
                value={reactJs}
            />
            <Skill name={gitSkill.name}
                icon={gitSkill.icon}
                color={gitSkill.color}
                value={git}
            />
        </>
    )
}
export default Skills;