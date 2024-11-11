interface ResultDisplayProps {
    result: any;
  }

const MLFeedback: React.FC<ResultDisplayProps> = ({ result }) => {
    if (result) {
        let jsonResults = JSON.parse(JSON.stringify(result));
        console.log('JSON Results:', jsonResults);

        let acs = jsonResults.acs;
        let us = jsonResults.us;
        console.log('ACS:', acs);
        console.log('US:', us);

        // Render user story data
        const renderUSData = (us: any) => {
            return Object.keys(us).map((key, index) => {
                const story = us[key];
                console.log(Object.values(story));
                const hasDefects = !Object.values(story).every(value => value === true);

                return (
                    <div
                        key={index}
                        className={`mb-6 p-4 rounded-lg ${hasDefects ? 'border-red-500 bg-red-100':'border-green-500 bg-green-100' }`}
                    >
                        <h2 className={`text-base font-semibold ${hasDefects ? 'text-red-600' : 'text-green-600'}`}>User Story {key}</h2>
                        <ul className="ml-5 list-disc text-gray-700">
                            {Object.entries(story).map(([descKey, descValue], descIndex) => (
                                <li key={descIndex} className="text-sm">
                                    {`${descKey}: ${descValue ? 'True' : 'False'}`}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            });
        };

        // Render acceptance criteria data
        const renderACData = (acs: any) => {
            return Object.keys(acs).map((key, index) => {
                const ac = acs[key];
                const hasDefects = Object.values(ac).some(value => !value);

                return (
                    <div
                        key={index}
                        className={`mb-6 p-4 rounded-lg ${hasDefects ? 'border-red-500 bg-red-100' : 'border-green-500 bg-green-100'}`}
                    >
                        <h2 className={`text-base font-semibold ${hasDefects ? 'text-red-600' : 'text-green-600'}`}>
                            Acceptance Criteria {key}
                        </h2>
                        <ul className="ml-5 list-disc text-gray-700">
                            {Object.entries(ac).map(([descKey, descValue], descIndex) => (
                                <li key={descIndex} className="text-sm">
                                    {`${descKey}: ${descValue ? 'True' : 'False'}`}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            });
        };

        return (
            <div>
                <strong className="text-xl">User Story</strong>
                <div className="mt-3">
                    {renderUSData(us)}
                </div>
                <strong className="text-xl">Acceptance Criteria</strong>
                <div className="mt-3">
                    {renderACData(acs)}
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h2>User Story</h2>
                <small>
                    Enter a user story to check
                </small>
                <h2>Acceptance Criteria</h2>
                <small>
                    Enter ACs to check
                </small>
            </div>
        )
    }
    return <div></div>;
}

export default MLFeedback;