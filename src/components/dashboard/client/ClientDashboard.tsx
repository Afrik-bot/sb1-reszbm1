@@ .. @@
 import DocumentCenter from './DocumentCenter';
 import SupportTickets from './SupportTickets';
 import MessagingCenter from './MessagingCenter';
+import VideoConsultationCard from '../../video/VideoConsultationCard';
 import { Card } from '@tremor/react';
 
 interface ClientDashboardProps {
@@ .. @@
         <div className="col-span-12 lg:col-span-9">
+          {activeTab === 'overview' && (
+            <div className="space-y-6">
+              <VideoConsultationCard
+                consultationId="test-consultation"
+                participantName="John Smith"
+                scheduledTime={new Date(Date.now() + 3600000)}
+              />
+              <ActivityFeed userId={profile.id} />
+            </div>
+          )}
-          {activeTab === 'overview' && <ActivityFeed userId={profile.id} />}
           {activeTab === 'activity' && <ActivityFeed userId={profile.id} />}
           {activeTab === 'projects' && <ProjectStatus userId={profile.id} />}