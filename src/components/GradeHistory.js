import React from 'react'

export default function GradeHistory() {

    const data = [
        {
            "Sl.No.": 1,
            "Course Code": "CHY1006",
            "Course Title": "Environmental Sustainability",
            "Course Type": "LT",
            "Credits": 2.0,
            "Grade": "C",
            "Exam Month": "Dec-2021",
            "Result Declared": "08-Feb-2022",
            "Course Distribution": "UCHSSMC",
            "Detail View": ""
        },
        {
            "Sl.No.": 2,
            "Course Code": "CSA2001",
            "Course Title": "Fundamentals in AI & ML",
            "Course Type": "LTP",
            "Credits": 4.0,
            "Grade": "B",
            "Exam Month": "Dec-2021",
            "Result Declared": "08-Feb-2022",
            "Course Distribution": "UCBESC",
            "Detail View": ""
        },
        {
            "Sl.No.": 3,
            "Course Code": "CSE0001",
            "Course Title": "Digital Literacy",
            "Course Type": "LT",
            "Credits": 1.0,
            "Grade": "P",
            "Exam Month": "Dec-2021",
            "Result Declared": "08-Feb-2022",
            "Course Distribution": "NC",
            "Detail View": ""
        },
        {
            "Sl.No.": 4,
            "Course Code": "CSE1021",
            "Course Title": "Introduction to Problem Solving and Programming",
            "Course Type": "LTP",
            "Credits": 4.0,
            "Grade": "A",
            "Exam Month": "Dec-2021",
            "Result Declared": "08-Feb-2022",
            "Course Distribution": "UCSDC",
            "Detail View": ""
        },
        {
            "Sl.No.": 5,
            "Course Code": "ENG1004",
            "Course Title": "EFFECTIVE TECHNICAL COMMUNICATION",
            "Course Type": "LT",
            "Credits": 2.0,
            "Grade": "B",
            "Exam Month": "Dec-2021",
            "Result Declared": "08-Feb-2022",
            "Course Distribution": "UCHSSMC",
            "Detail View": ""
        },
        {
            "Sl.No.": 6,
            "Course Code": "MAT1001",
            "Course Title": "Calculus and Laplace Transforms",
            "Course Type": "LT",
            "Credits": 4.0,
            "Grade": "B",
            "Exam Month": "Dec-2021",
            "Result Declared": "08-Feb-2022",
            "Course Distribution": "UCNSC",
            "Detail View": ""
        },
        {
            "Sl.No.": 7,
            "Course Code": "PHY1001",
            "Course Title": "ENGINEERING PHYSICS",
            "Course Type": "LTP",
            "Credits": 4.0,
            "Grade": "C",
            "Exam Month": "Dec-2021",
            "Result Declared": "08-Feb-2022",
            "Course Distribution": "UCNSC",
            "Detail View": ""
        },
        {
            "Sl.No.": 8,
            "Course Code": "CHY1001",
            "Course Title": "ENGINEERING CHEMISTRY",
            "Course Type": "LTP",
            "Credits": 4.0,
            "Grade": "B",
            "Exam Month": "May-2022",
            "Result Declared": "15-Jun-2022",
            "Course Distribution": "UCNSC",
            "Detail View": ""
        },
        {
            "Sl.No.": 9,
            "Course Code": "CSE2001",
            "Course Title": "Object Oriented Programming With C++",
            "Course Type": "LTP",
            "Credits": 4.0,
            "Grade": "A",
            "Exam Month": "May-2022",
            "Result Declared": "15-Jun-2022",
            "Course Distribution": "PC",
            "Detail View": ""
        },
        {
            "Sl.No.": 10,
            "Course Code": "CSE2002",
            "Course Title": "Data Structures and Algorithms",
            "Course Type": "LTP",
            "Credits": 4.0,
            "Grade": "D",
            "Exam Month": "May-2022",
            "Result Declared": "15-Jun-2022",
            "Course Distribution": "PC",
            "Detail View": ""
        },
        {
            "Sl.No.": 11,
            "Course Code": "EEE1001",
            "Course Title": "Electric Circuits and Systems",
            "Course Type": "LTP",
            "Credits": 4.0,
            "Grade": "B",
            "Exam Month": "May-2022",
            "Result Declared": "15-Jun-2022",
            "Course Distribution": "UCBESC",
            "Detail View": ""
        },
        {
            "Sl.No.": 12,
            "Course Code": "ENG2005",
            "Course Title": "Advanced Technical Communication",
            "Course Type": "LT",
            "Credits": 2.0,
            "Grade": "D",
            "Exam Month": "May-2022",
            "Result Declared": "15-Jun-2022",
            "Course Distribution": "UCHSSMC",
            "Detail View": ""
        },
        {
            "Sl.No.": 13,
            "Course Code": "MAT3002",
            "Course Title": "Applied Linear Algebra",
            "Course Type": "LT",
            "Credits": 3.0,
            "Grade": "A",
            "Exam Month": "May-2022",
            "Result Declared": "15-Jun-2022",
            "Course Distribution": "UCNSC",
            "Detail View": ""
        },
        {
            "Sl.No.": 14,
            "Course Code": "CSE2003",
            "Course Title": "Computer Architecture and Organization",
            "Course Type": "LT",
            "Credits": 4.0,
            "Grade": "B",
            "Exam Month": "Oct-2022",
            "Result Declared": "06-Dec-2022",
            "Course Distribution": "PC",
            "Detail View": ""
        },
        {
            "Sl.No.": 15,
            "Course Code": "DSN2098",
            "Course Title": "Project Exhibition ? I",
            "Course Type": "PJ",
            "Credits": 1.0,
            "Grade": "A",
            "Exam Month": "Oct-2022",
            "Result Declared": "06-Dec-2022",
            "Course Distribution": "UCPI",
            "Detail View": ""
        },
        {
            "Sl.No.": 16,
            "Course Code": "ECE2002",
            "Course Title": "Digital Logic Design",
            "Course Type": "LTP",
            "Credits": 4.0,
            "Grade": "B",
            "Exam Month": "Oct-2022",
            "Result Declared": "06-Dec-2022",
            "Course Distribution": "PC",
            "Detail View": ""
        },
        {
            "Sl.No.": 17,
            "Course Code": "ENG3001",
            "Course Title": "Introduction to Computational Linguistics",
            "Course Type": "LT",
            "Credits": 3.0,
            "Grade": "C",
            "Exam Month": "Oct-2022",
            "Result Declared": "06-Dec-2022",
            "Course Distribution": "UEME",
            "Detail View": ""
        },
        {
            "Sl.No.": 18,
            "Course Code": "HUM1002",
            "Course Title": "Emotional Intelligence",
            "Course Type": "LT",
            "Credits": 3.0,
            "Grade": "B",
            "Exam Month": "Oct-2022",
            "Result Declared": "06-Dec-2022",
            "Course Distribution": "UEHSSME",
            "Detail View": ""
        },
        {
            "Sl.No.": 19,
            "Course Code": "MAT2002",
            "Course Title": "Discrete Mathematics And Graph Theory",
            "Course Type": "LT",
            "Credits": 4.0,
            "Grade": "B",
            "Exam Month": "Oct-2022",
            "Result Declared": "06-Dec-2022",
            "Course Distribution": "UCNSC",
            "Detail View": ""
        },
        {
            "Sl.No.": 20,
            "Course Code": "MAT2003",
            "Course Title": "Applied Numerical methods",
            "Course Type": "LT",
            "Credits": 3.0,
            "Grade": "B",
            "Exam Month": "Oct-2022",
            "Result Declared": "06-Dec-2022",
            "Course Distribution": "UEME",
            "Detail View": ""
        },
        {
            "Sl.No.": 21,
            "Course Code": "CSE3001",
            "Course Title": "Database Management Systems",
            "Course Type": "LTP",
            "Credits": 4.0,
            "Grade": "A",
            "Exam Month": "Feb-2023",
            "Result Declared": "06-Apr-2023",
            "Course Distribution": "PC",
            "Detail View": ""
        },
        {
            "Sl.No.": 22,
            "Course Code": "CSE3004",
            "Course Title": "Design Analysis Of Algorithm",
            "Course Type": "LT",
            "Credits": 4.0,
            "Grade": "C",
            "Exam Month": "Feb-2023",
            "Result Declared": "06-Apr-2023",
            "Course Distribution": "PC",
            "Detail View": ""
        },
        {
            "Sl.No.": 23,
            "Course Code": "DSN2099",
            "Course Title": "Project Exhibition - II",
            "Course Type": "PJ",
            "Credits": 1.0,
            "Grade": "A",
            "Exam Month": "Feb-2023",
            "Result Declared": "06-Apr-2023",
            "Course Distribution": "PC",
            "Detail View": ""
        },
        {
            "Sl.No.": 24,
            "Course Code": "MAT3003",
            "Course Title": "Probability, Statistics And Reliability",
            "Course Type": "LT",
            "Credits": 4.0,
            "Grade": "C",
            "Exam Month": "Feb-2023",
            "Result Declared": "06-Apr-2023",
            "Course Distribution": "UCNSC",
            "Detail View": ""
        },
        {
            "Sl.No.": 25,
            "Course Code": "MEE2014",
            "Course Title": "Engineering Design and Modelling",
            "Course Type": "LTP",
            "Credits": 4.0,
            "Grade": "B",
            "Exam Month": "Feb-2023",
            "Result Declared": "06-Apr-2023",
            "Course Distribution": "UE",
            "Detail View": ""
        },
        {
            "Sl.No.": 26,
            "Course Code": "ONL1010",
            "Course Title": "Applied Machine Learning in Python",
            "Course Type": "OC",
            "Credits": 4.0,
            "Grade": "C",
            "Exam Month": "Feb-2023",
            "Result Declared": "06-Apr-2023",
            "Course Distribution": "UE",
            "Detail View": ""
        },
        {
            "Sl.No.": 27,
            "Course Code": "CSG2003",
            "Course Title": "Human Computer Interaction",
            "Course Type": "LT",
            "Credits": 3.0,
            "Grade": "A",
            "Exam Month": "May-2023",
            "Result Declared": "17-Jun-2023",
            "Course Distribution": "UEME",
            "Detail View": ""
        },
        {
            "Sl.No.": 28,
            "Course Code": "HUM0001",
            "Course Title": "Ethics and Values",
            "Course Type": "LT",
            "Credits": 2.0,
            "Grade": "P",
            "Exam Month": "May-2023",
            "Result Declared": "17-Jun-2023",
            "Course Distribution": "NC",
            "Detail View": ""
        },
        {
            "Sl.No.": 29,
            "Course Code": "PLA1006",
            "Course Title": "Lateral Thinking",
            "Course Type": "LT",
            "Credits": 2.0,
            "Grade": "B",
            "Exam Month": "May-2023",
            "Result Declared": "17-Jun-2023",
            "Course Distribution": "UCSDC",
            "Detail View": ""
        },
        {
            "Sl.No.": 30,
            "Course Code": "SST1003",
            "Course Title": "Professional Communication Skills for Engineers",
            "Course Type": "P",
            "Credits": 1.0,
            "Grade": "D",
            "Exam Month": "May-2023",
            "Result Declared": "17-Jun-2023",
            "Course Distribution": "UCSDC",
            "Detail View": ""
        },
        {
            "Sl.No.": 31,
            "Course Code": "CSE2004",
            "Course Title": "Theory Of Computation And Compiler Design",
            "Course Type": "LT",
            "Credits": 4.0,
            "Grade": "B",
            "Exam Month": "Aug-2023",
            "Result Declared": "23-Sep-2023",
            "Course Distribution": "PC",
            "Detail View": ""
        },
        {
            "Sl.No.": 32,
            "Course Code": "CSE3010",
            "Course Title": "Computer Vision",
            "Course Type": "LP",
            "Credits": 3.0,
            "Grade": "C",
            "Exam Month": "Aug-2023",
            "Result Declared": "23-Sep-2023",
            "Course Distribution": "PE",
            "Detail View": ""
        },
        {
            "Sl.No.": 33,
            "Course Code": "CSE4001",
            "Course Title": "Internet and Web Programming",
            "Course Type": "LTP",
            "Credits": 4.0,
            "Grade": "A",
            "Exam Month": "Aug-2023",
            "Result Declared": "23-Sep-2023",
            "Course Distribution": "PC",
            "Detail View": ""
        },
        {
            "Sl.No.": 34,
            "Course Code": "MAT2001",
            "Course Title": "Differential And Difference Equations",
            "Course Type": "LT",
            "Credits": 3.0,
            "Grade": "A",
            "Exam Month": "Aug-2023",
            "Result Declared": "23-Sep-2023",
            "Course Distribution": "UEME",
            "Detail View": ""
        },
        {
            "Sl.No.": 35,
            "Course Code": "PLA1004",
            "Course Title": "Competitive Coding Practices",
            "Course Type": "LP",
            "Credits": 3.0,
            "Grade": "A",
            "Exam Month": "Aug-2023",
            "Result Declared": "23-Sep-2023",
            "Course Distribution": "UCSDC",
            "Detail View": ""
        },
        {
            "Sl.No.": 36,
            "Course Code": "SST2003",
            "Course Title": "Dynamics of workplace communication Skills",
            "Course Type": "P",
            "Credits": 1.0,
            "Grade": "B",
            "Exam Month": "Aug-2023",
            "Result Declared": "23-Sep-2023",
            "Course Distribution": "UCSDC",
            "Detail View": ""
        },
        {
            "Sl.No.": 37,
            "Course Code": "CSE3005",
            "Course Title": "Software Engineering",
            "Course Type": "LTP",
            "Credits": 4.0,
            "Grade": "B",
            "Exam Month": "Dec-2023",
            "Result Declared": "02-Feb-2024",
            "Course Distribution": "UE",
            "Detail View": ""
        },
        {
            "Sl.No.": 38,
            "Course Code": "CSE3006",
            "Course Title": "Computer Networks",
            "Course Type": "LTP",
            "Credits": 4.0,
            "Grade": "B",
            "Exam Month": "Dec-2023",
            "Result Declared": "02-Feb-2024",
            "Course Distribution": "UE",
            "Detail View": ""
        },
        {
            "Sl.No.": 39,
            "Course Code": "DSN2092",
            "Course Title": "SUMMER INDUSTRIAL INTERNSHIP",
            "Course Type": "PJ",
            "Credits": 1.0,
            "Grade": "B",
            "Exam Month": "Dec-2023",
            "Result Declared": "02-Feb-2024",
            "Course Distribution": "UCPI",
            "Detail View": ""
        },
        {
            "Sl.No.": 40,
            "Course Code": "ECE3004",
            "Course Title": "Microprocessors And Microcontrollers",
            "Course Type": "LTP",
            "Credits": 4.0,
            "Grade": "B",
            "Exam Month": "Dec-2023",
            "Result Declared": "02-Feb-2024",
            "Course Distribution": "PC",
            "Detail View": ""
        },
        {
            "Sl.No.": 41,
            "Course Code": "CSD4002",
            "Course Title": "Ethical Hacking",
            "Course Type": "LTP",
            "Credits": 4.0,
            "Grade": "B",
            "Exam Month": "Dec-2023",
            "Result Declared": "02-Feb-2024",
            "Course Distribution": "PE",
            "Detail View": ""
        },
        {
            "Sl.No.": 42,
            "Course Code": "CSE2006",
            "Course Title": "Programming in Java",
            "Course Type": "LP",
            "Credits": 3.0,
            "Grade": "A",
            "Exam Month": "Dec-2023",
            "Result Declared": "02-Feb-2024",
            "Course Distribution": "UCSDC",
            "Detail View": ""
        }
    ]

    const totalCreditsEarned = data.reduce((total, course) => total + course.Credits, 0);

    // Count the number of each grade
    const gradeCounts = data.reduce((counts, course) => {
        const grade = course.Grade;
        counts[grade] = (counts[grade] || 0) + 1;
        return counts;
    }, {
        S: 0,
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        F: 0,
        N: 0,
    });
    return (
        <div className='container' >
            <h1 className='text-white p-3 fs-2 fw-bold'>Grade History</h1>
            <div className="mt-2 card card-borders card-spotlight">
                <div className="card-body  text-light">
                    <h5 className="card-title ">CGPA Details</h5>
                    <h6 className="card-subtitle mb-2 text-dark-emphasis">AI-driven system analyzing student grade history to recommend focused subject areas for academic improvement.</h6>
                    <div className="card-text mt-3 card-scroll-x">
                        <table className="custom-table">
                            <tbody>
                                <table className="custom-table" cellPadding="10">
                                    <tr>
                                        <th>Credits Registered</th>
                                        <th>Credits Earned</th>
                                        <th>CGPA %</th>
                                        <th>S Grade</th>
                                        <th>A Grade</th>
                                        <th>B Grade</th>
                                        <th>C Grade</th>
                                        <th>D Grade</th>
                                        <th>E Grade</th>
                                        <th>F Grade</th>
                                        <th>N Grade</th>
                                    </tr>
                                    <tr>
                                        <td>131</td>
                                        <td>{totalCreditsEarned}</td>
                                        <td>7.96</td>
                                        <td>{gradeCounts['S']}</td>
                                        <td>{gradeCounts['A']}</td>
                                        <td>{gradeCounts['B']}</td>
                                        <td>{gradeCounts['C']}</td>
                                        <td>{gradeCounts['D']}</td>
                                        <td>{gradeCounts['E']}</td>
                                        <td>{gradeCounts['F']}</td>
                                        <td>{gradeCounts['N']}</td>
                                    </tr>
                                </table>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="mt-2 card card-borders card-spotlight">
                <div className="card-body  text-light">
                    <h5 className="card-title">Vellore Institute of Technology (VIT), India - Effective Grades</h5>
                    <h6 className="card-subtitle mb-2 text-dark-emphasis">Spotlight: Discover the latest achievements, events, and stories shaping our community at VTOP.</h6>
                    <div className="card-text mt-3 card-scroll-x">
                        <table className="custom-table">
                            <tbody>
                                <table className="custom-table" cellPadding="10">
                                    <tr>
                                        <th>Sl.No.</th>
                                        <th>Course Code	</th>
                                        <th>Course Title</th>
                                        <th>Course Type	</th>
                                        <th>Credits</th>
                                        <th>Grade</th>
                                        <th>Exam Month	</th>
                                        <th>Result Declared	</th>
                                        <th>Course Distribution	</th>
                                    </tr>
                                    {data.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item["Sl.No."]}</td>
                                            <td>{item["Course Code"]}</td>
                                            <td>{item["Course Title"]}</td>
                                            <td>{item["Course Type"]}</td>
                                            <td>{item["Credits"]}</td>
                                            <td>{item["Grade"]}</td>
                                            <td>{item["Exam Month"]}</td>
                                            <td>{item["Result Declared"]}</td>
                                            <td>{item["Course Distribution"]}</td>
                                        </tr>
                                    ))}
                                </table>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
