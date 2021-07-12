

const prescriptions = [
  {
    date_prescribed: 'Monday',
    time_prescribed: '12:00',
    prescribed_by: 'Dr Lagbaja',
    diagnosis: ['Malaria', 'Pile', 'Typhoid'],
  },
  {
    date_prescribed: 'Tuesday',
    time_prescribed: '2:00',
    prescribed_by: 'Dr Murphy',
    diagnosis: ['Cholera', 'Pile', 'HBP'],
  },
  {
    date_prescribed: 'Saturday',
    time_prescribed: '4:00',
    prescribed_by: 'Dr Anderson',
    diagnosis: ['Pile', 'Food Poisoning'],
  }
]
function App() {
  return (
    <div className="App">
      <div className='border'>C</div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md border">
            One of three columns
          </div>
          <div className="col-md-10 border py-3" style={{backgroundColor: `#F8F8FF`}}>
            <div className='filter-bar container-fluid d-flex justify-content-between py-4'>
              <span style={{color:`#6A69E4`, fontSize:`20px`}}>Prescription</span>
              <span>
                <span className='mr-3'>FILTERS</span>
                <button type="button" className="btn btn-primary">+ {' '} Add New</button>
              </span>
            </div>
            <div className='container-fluid'>
              <div className='row py-3'>
                {prescriptions.map((pr) => (
                    <div className='col-md-6'>
                      <div className='border p-2 prescription-card' style={{marginBottom: `30px`}}>
                        <p>
                          <span className='text-muted'>Date Prescribed:</span> {pr.date_prescribed}
                        </p>
                        <p>
                          <span className='text-muted'>Time Prescribed:</span> {pr.time_prescribed}
                        </p>
                        <p>
                          <span className='text-muted'>Prescribed by:</span> {pr.prescribed_by}
                        </p>
                        <p className='mb-0'>
                          <span className='text-muted'>Diagnosis/Condition:</span> {pr.diagnosis.join(', ')}
                        </p>
                      </div>
                    </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
