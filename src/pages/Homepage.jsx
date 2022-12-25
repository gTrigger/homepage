import { Projects } from 'components/Projects'
import { Contacts } from 'components/Contacts'
import { About } from 'components/About'

const Homepage = () => {
    return (
        <div className="homepage">
            <About/>

            <Projects/>

            <Contacts/>
        </div>
    );
}

export { Homepage };
