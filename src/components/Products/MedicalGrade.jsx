import React from 'react';
import './MedicalGrade.css';
import useScrollReveal from '../../hooks/useScrollReveal';

const MedicalGrade = () => {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
    const comparisonData = [
        {
            feature: 'Regulation',
            medical: 'Meets medical device standards (ASTM/EN/ISO)',
            industrial: 'No medical certification required'
        },
        {
            feature: 'Barrier Protection',
            medical: 'Tested for bacteria & virus resistance',
            industrial: 'Focused on durability & chemical resistance'
        },
        {
            feature: 'Primary Use',
            medical: 'Healthcare, labs, dental',
            industrial: 'Manufacturing, automotive, cleaning'
        },
        {
            feature: 'Thickness',
            medical: '3–5 mil for tactile sensitivity',
            industrial: '5–8+ mil for heavy-duty tasks'
        }
    ];

    return (
        <section className="medical-grade-wrapper">
            <div 
                ref={ref} 
                className={`medical-grade-container mg-reveal ${isVisible ? 'reveal-active' : ''}`}
            >
                
                <div className="medical-grade-header">
                    <h2 className="mg-title-line">Medical Grade</h2>
                    <div className="mg-vs-divider">VS</div>
                    <h2 className="mg-title-line">Industrial Grade Nitrile Gloves</h2>
                </div>

                <div className="medical-grade-table-responsive">
                    <table className="medical-grade-table">
                        <thead>
                            <tr>
                                <th className="mg-th-left">Feature</th>
                                <th>Medical Grade</th>
                                <th>Industrial Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, index) => (
                                <tr key={index}>
                                    <td className="mg-feature-col">{row.feature}</td>
                                    <td className="mg-data-col">{row.medical}</td>
                                    <td className="mg-data-col">{row.industrial}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
};

export default MedicalGrade;
