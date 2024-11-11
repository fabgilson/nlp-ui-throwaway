interface ResultDisplayProps {
    result: any
}


const NLPFeedback: React.FC<ResultDisplayProps> = ({ result }) => {

    if (result) {
        let jsonResults = JSON.parse(JSON.stringify(result))
        let acs = jsonResults.acs
        let us = jsonResults.us

        const renderUSData = (warnings: any) => {
            return (
                <div>
                    <div
                        className={`mb-6 p-4 rounded-lg ${
                            warnings.length === 0
                                ? 'border-green-500 bg-green-100'
                                : 'border-red-500 bg-red-100'
                        }`}
                    >
                        {warnings.length === 0 ? (
                            <p className="text-green-700 text-sm">No warnings found. Everything is good!</p>
                        ) : (
                            warnings.map((warning: any, index: any) => (
                                <div key={index} className="mb-2">
                                    <h2 className="text-base font-semibold text-red-600">{warning.title}</h2>
                                    <ul className="ml-5 list-disc text-gray-700">
                                        {warning.description.map((desc: any, descIndex: any) => (
                                            <li key={descIndex} className="text-sm">
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            );
        };

        const renderACData = (warnings: any) => {
            return (
              <div>
                {warnings.map((warning: any, index: any) => (
                  <div
                    key={index}
                    className={`mb-6 p-4 rounded-lg ${
                      warning.defects.length === 0
                        ? 'border-green-500 bg-green-100'
                        : 'border-red-500 bg-red-100'
                    }`}
                  >
                    <h2
                      className={`text-base font-semibold ${
                        warning.defects.length === 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {warning.title}
                    </h2>
                    {warning.defects.length === 0 ? (
                      <p className="ml-5 text-sm text-green-700">
                        No defects found. Everything is good!
                      </p>
                    ) : (
                      warning.defects.map((defect: any, defectIndex: any) => (
                        <div key={defectIndex} className="ml-5 mb-4">
                          {typeof defect === 'string' ? (
                            <p className="text-sm font-medium text-red-900">{defect}</p>
                          ) : (
                            <>
                              <h3 className="text-sm font-medium text-red-900">{defect.title}</h3>
                              <ul className="ml-5 list-disc text-gray-700">
                                {defect.descriptions.map((description: any, descIndex: any) => (
                                  <li key={descIndex} className="text-sm">
                                    {description}
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                ))}
              </div>
            );
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

}

export default NLPFeedback;