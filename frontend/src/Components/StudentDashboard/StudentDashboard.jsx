import React from 'react'
import { useNavigate } from 'react-router-dom'
import './StudentDashboard.css'

const StudentDashboard = () => {
  const navigate = useNavigate()

  const [isEditing, setIsEditing] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState('dashboard')
  const [profile, setProfile] = React.useState(() => {
    const saved = localStorage.getItem('studentProfile')
    return saved ? JSON.parse(saved) : {
      fullName: 'John Doe',
      email: localStorage.getItem('loggedInEmail') || 'student@example.com',
      phone: '',
      bio: ''
    }
  })

  const [ongoingCourses, setOngoingCourses] = React.useState([
    { id: 'c1', title: 'Environmental Awareness 101', progress: 65 },
    { id: 'c2', title: 'Community Health Basics', progress: 30 }
  ])

  const [registeredCourses, setRegisteredCourses] = React.useState([
    { id: 'r1', title: 'Sustainable Development Goals' },
    { id: 'r2', title: 'Gender Equality and Inclusion' },
    { id: 'r3', title: 'Digital Literacy for All' }
  ])

  const [announcements] = React.useState([
    { id: 'a1', title: 'Orientation Webinar', detail: 'Join us this Friday at 5PM for the orientation.' },
    { id: 'a2', title: 'Certificate Policy', detail: 'Certificates are issued upon 100% completion.' }
  ])

  const [events] = React.useState([
    { id: 'e1', name: 'Clean Drive', date: 'Oct 15, 2025', location: 'City Park' },
    { id: 'e2', name: 'Health Camp', date: 'Nov 02, 2025', location: 'Community Center' }
  ])

  const startCourse = (courseId) => {
    const course = registeredCourses.find((c) => c.id === courseId)
    if (!course) return
    setRegisteredCourses((prev) => prev.filter((c) => c.id !== courseId))
    setOngoingCourses((prev) => [{ id: `c_${course.id}`, title: course.title, progress: 0 }, ...prev])
    setActiveTab('ongoing')
  }

  const unregisterCourse = (courseId) => {
    setRegisteredCourses((prev) => prev.filter((c) => c.id !== courseId))
  }

  const incrementProgress = (courseId, delta = 10) => {
    setOngoingCourses((prev) => prev.map((c) => c.id === courseId ? { ...c, progress: Math.min(100, c.progress + delta) } : c))
  }

  const completeCourse = (courseId) => {
    setOngoingCourses((prev) => prev.filter((c) => c.id !== courseId))
  }

  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const saveProfile = (e) => {
    e.preventDefault()
    localStorage.setItem('studentProfile', JSON.stringify(profile))
    setIsEditing(false)
  }

  const logout = () => {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('loggedInEmail')
    navigate('/cleen-foundation-ngo/login')
  }

  return (
    <div className="student-dashboard">
      <header className="student-dashboard__header">
        <div className="student-dashboard__header-inner">
          <div className="student-dashboard__title-group">
            <div className="student-dashboard__avatar">{(profile.fullName || 'JD').split(' ').map(s=>s[0]).join('').slice(0,2).toUpperCase()}</div>
            <div>
              <h1 className="student-dashboard__title">Student Dashboard</h1>
              <div className="student-dashboard__subtitle">Welcome back{profile.fullName ? `, ${profile.fullName.split(' ')[0]}` : ''}!</div>
            </div>
          </div>
          <div className="student-dashboard__actions">
            <button className="btn btn--light" onClick={() => setActiveTab('profile')}>Profile</button>
            <button className="student-dashboard__logout" onClick={logout}>Logout</button>
          </div>
        </div>
      </header>

      <nav className="student-dashboard__tabs">
        <button className={`tab-link ${activeTab === 'dashboard' ? 'is-active' : ''}`} onClick={() => setActiveTab('dashboard')}>Overview</button>
        <button className={`tab-link ${activeTab === 'profile' ? 'is-active' : ''}`} onClick={() => setActiveTab('profile')}>Profile</button>
        <button className={`tab-link ${activeTab === 'ongoing' ? 'is-active' : ''}`} onClick={() => setActiveTab('ongoing')}>Ongoing Courses</button>
        <button className={`tab-link ${activeTab === 'registered' ? 'is-active' : ''}`} onClick={() => setActiveTab('registered')}>Registered Courses</button>
      </nav>

      <main className="student-dashboard__content">
          {activeTab === 'dashboard' && (
            <>
              <section className="stats">
                <div className="stat">
                  <div className="stat__label">Ongoing</div>
                  <div className="stat__value">{ongoingCourses.length}</div>
                </div>
                <div className="stat">
                  <div className="stat__label">Registered</div>
                  <div className="stat__value">{registeredCourses.length}</div>
                </div>
                <div className="stat">
                  <div className="stat__label">Completion Avg</div>
                  <div className="stat__value">
                    {ongoingCourses.length
                      ? Math.round(ongoingCourses.reduce((a, c) => a + c.progress, 0) / ongoingCourses.length)
                      : 0}%
                  </div>
                </div>
              </section>

              <section className="student-dashboard__section">
                <div className="student-dashboard__section-header">
                  <h2>Quick Look: Ongoing</h2>
                </div>
                <div className="courses">
                  {ongoingCourses.map((course) => (
                    <div key={course.id} className="course-card">
                      <div className="course-card__title">{course.title}</div>
                      <div className="progress">
                        <div className="progress__bar" style={{ width: `${course.progress}%` }} />
                      </div>
                      <div className="progress__label">{course.progress}% complete</div>
                      <div className="course-card__actions">
                        <button className="btn btn--light" onClick={() => incrementProgress(course.id, 10)}>Continue (+10%)</button>
                        <button className="btn btn--success" onClick={() => completeCourse(course.id)}>Mark Complete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="student-dashboard__section">
                <div className="student-dashboard__section-header">
                  <h2>Announcements</h2>
                </div>
                <ul className="list">
                  {announcements.map((a) => (
                    <li key={a.id} className="list__item">
                      <div className="list__title">{a.title}</div>
                      <div className="list__detail">{a.detail}</div>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="student-dashboard__section">
                <div className="student-dashboard__section-header">
                  <h2>Upcoming Events</h2>
                </div>
                <ul className="list">
                  {events.map((e) => (
                    <li key={e.id} className="list__item">
                      <div className="list__title">{e.name}</div>
                      <div className="list__detail">{e.date} • {e.location}</div>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="student-dashboard__section">
                <div className="student-dashboard__section-header">
                  <h2>Quick Links</h2>
                </div>
                <div className="quick-links">
                  <button className="quick-link" onClick={() => navigate('/cleen-foundation-ngo/apply')}>Apply</button>
                  <button className="quick-link" onClick={() => navigate('/cleen-foundation-ngo/blog')}>Blog</button>
                  <button className="quick-link" onClick={() => navigate('/cleen-foundation-ngo/donation')}>Donation</button>
                  <button className="quick-link" onClick={() => navigate('/cleen-foundation-ngo/contact')}>Contact</button>
                  <button className="quick-link" onClick={() => navigate('/cleen-foundation-ngo/chatbot')}>Chatbot</button>
                </div>
              </section>
            </>
          )}

          {activeTab === 'profile' && (
            <section className="student-dashboard__section">
              <div className="student-dashboard__section-header">
                <h2>Profile</h2>
                {!isEditing && (
                  <button className="btn" onClick={() => setIsEditing(true)}>Edit</button>
                )}
              </div>

              {!isEditing ? (
                <div className="profile-view">
                  <div><strong>Name:</strong> {profile.fullName}</div>
                  <div><strong>Email:</strong> {profile.email}</div>
                  <div><strong>Phone:</strong> {profile.phone || '—'}</div>
                  <div><strong>Bio:</strong> {profile.bio || '—'}</div>
                </div>
              ) : (
                <form className="profile-form" onSubmit={saveProfile}>
                  <label>Full Name</label>
                  <input name="fullName" value={profile.fullName} onChange={handleProfileChange} required />

                  <label>Email</label>
                  <input name="email" type="email" value={profile.email} onChange={handleProfileChange} required />

                  <label>Phone</label>
                  <input name="phone" value={profile.phone} onChange={handleProfileChange} />

                  <label>Bio</label>
                  <textarea name="bio" value={profile.bio} onChange={handleProfileChange} rows={4} />

                  <div className="profile-form__actions">
                    <button type="button" className="btn btn--secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                    <button type="submit" className="btn">Save</button>
                  </div>
                </form>
              )}
            </section>
          )}

          {activeTab === 'ongoing' && (
            <section className="student-dashboard__section">
              <div className="student-dashboard__section-header">
                <h2>Ongoing Courses</h2>
              </div>
              <div className="courses">
                {ongoingCourses.map((course) => (
                  <div key={course.id} className="course-card">
                    <div className="course-card__title">{course.title}</div>
                    <div className="progress">
                      <div className="progress__bar" style={{ width: `${course.progress}%` }} />
                    </div>
                    <div className="progress__label">{course.progress}% complete</div>
                    <div className="course-card__actions">
                      <button className="btn btn--light" onClick={() => incrementProgress(course.id, 10)}>Continue (+10%)</button>
                      <button className="btn btn--success" onClick={() => completeCourse(course.id)}>Mark Complete</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'registered' && (
            <section className="student-dashboard__section">
              <div className="student-dashboard__section-header">
                <h2>Registered Courses</h2>
              </div>
              <ul className="registered-list">
                {registeredCourses.length === 0 && (
                  <li className="registered-list__item">No registered courses.</li>
                )}
                {registeredCourses.map((course) => (
                  <li key={course.id} className="registered-list__item">
                    <span>{course.title}</span>
                    <span className="registered-list__actions">
                      <button className="btn btn--success" onClick={() => startCourse(course.id)}>Start</button>
                      <button className="btn btn--secondary" onClick={() => unregisterCourse(course.id)}>Unregister</button>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}
      </main>
    </div>
  )
}

export default StudentDashboard


