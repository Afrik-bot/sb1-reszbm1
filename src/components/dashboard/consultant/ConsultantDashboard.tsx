@@ .. @@
 import CalendarView from './CalendarView';
 import DocumentManagement from './DocumentManagement';
 import TimeProductivity from './TimeProductivity';
+import VideoConsultationCard from '../../video/VideoConsultationCard';
 import { Case } from '@/types/case';
 import { Client } from '@/types/client';
 
@@ .. @@
         <div className="p-6">
+          {activeTab === 'overview' && (
+            <div className="space-y-6">
+              <VideoConsultationCard
+                consultationId="test-consultation"
+                participantName="Jane Doe"
+                scheduledTime={new Date(Date.now() + 3600000)}
+              />
+              <CaseOverview cases={mockCases} />
+            </div>
+          )}
-          {activeTab === 'cases' && <CaseOverview cases={mockCases} />}
+          {activeTab === 'cases' && <CaseOverview cases={mockCases} />}