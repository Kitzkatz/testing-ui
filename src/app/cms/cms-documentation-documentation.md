FileUploader,

    <FileUploader onFilesUpload={handleClick} />

//handleFilesUpload,

ContentEditor,

    <ContentEditor onSave={handleClick} />

UserProfile,

    <UserProfile user={optionsMock1}/>

UserManagement,

    <UserManagement users={optionsMock1} />

ContentVersioning,

    <ContentVersioning onRollback={handleClick} versions={optionsMock1}/>

Comments,

    <Comments onCommentSubmit={handleClick} comments={optionsMock1} />

AnalyticsIntegration,

WorkflowAndApproval,

    <WorkflowAndApproval content={contentMock} onApprove={handleClick} onReject={handleClick} />

FormBuilder,

    <FormBuilder onSubmit={handleClick} fields={optionsMock1} />

MultilingualSupport,

ContentImportExport,

    <ContentImportExport onImport={handleClick} onExport={handleClick}/>

ThemeManagement,

BackupRestore,

    <BackupRestore onBackup={handleClick} onRestore={handleClick} />

ThirdPartyIntegration,

    <ThirdPartyIntegration service={optionsMock1} apiKey={optionsMock} onApiKeyChange={handleClick} />

AccessibilityFeatures,

ErrorHandling,

    <ErrorHandling errorMessage={strings} />

UserActivityTracking,

    <UserActivityTracking activityLog={optionsMock1} />

ContentArchiving,

    <ContentArchiving archivedContent={optionsMock1} onRestoreArchive={handleClick} />

RSSFeeds,

    <RSSFeeds feeds={optionsMock1} />

CustomFields,

    <CustomFields fields={optionsMock1} />

ContentActivity,

    <ContentActivity activityData={optionsMock1} />

CommentModeration,

    <CommentModeration comments={optionsMock1} onApproveComment={handleClick} onDeleteComment={handleClick} />

EmailNotification,

    <EmailNotification onSendNotification={handleClick} />

ContentLocking,

    <ContentLocking isLocked={true} onToggleLock={handleClick} />

UserPreferences,

    <ContentRevisions revisions={optionsMock1} onRestoreRevision={handleClick} />

ContentRevisions,

ContentApprovalWorkflow,

    <ContentApprovalWorkflow content={contentMock} onApprove={handleClick} onReject={handleClick}/>

UserAccessControl,

    <UserAccessControl onUserAccessChange={handleClick} userRoles={optionsMock} />

ContentPreview,

    <ContentPreview previewContent={contentMock} />

ContentExpiration,

    <ContentExpiration expirationDate={'4-20-2100'} onSetExpiration={handleClick} />

ContentLocalization,

    <ContentLocalization onLanguageChange={handleClick} availableLanguages={optionsMock1} />

AdvancedContentImportExport,

    <AdvancedContentImportExport onImport={handleClick} onExport={handleClick} />

ContentHistory,

    <ContentHistory historyEntries={optionsMock1} />

VersionControl,

    <VersionControl currentVersion={strings} onVersionChange={handleClick} availableVersions={optionsMock1} />

TranslationManagement,

    <TranslationManagement onTranslationChange={handleClick} languages={optionsMock1} translations={strings}/>

ContentPermissions,

    <ContentPermissions onPermissionChange={handleClick} users={optionsMock1} />

ContentAnalytics,

    <ContentAnalytics pageViews={1} uniqueVisitors={1} conversionRate={1} />

ContentRecommendations,

    <ContentRecommendations recommendedContent={optionsMock1} />

ContentExportOptions,

    <ContentExportOptions onExport={handleClick} exportFormats={optionsMock1} />

ContentGeolocation,

    <ContentGeolocation locationData={optionsMock1} />

ContentSearch,

    <ContentSearch onSearch={handleClick} />

WorkflowStatus,

    <WorkflowStatus status={strings} />

ApprovalHistory,

    <ApprovalHistory approvalHistory={optionsMock1} />

ContentCollaboration,

    <ContentCollaboration collaborators={optionsMock1} />

ContentSubscription,

    <ContentSubscription onToggleSubscription={handleClick} isSubscribed={true} />

ContentAccessibility,

    <ContentAccessibility isAccessible={true} />

ContentFeedback,

    <ContentFeedback onFeedBackSubmit={handleClick} />

ContentSEO,

    <ContentSEO onUpdateSEO={handleClick} seoMetadata={optionsMock1} />

ContentTags,

    <ContentTags onAddTag={handleClick} tags={optionsMock1} />

ContentPerformanceMetrics,

ContentExportHistory,

    <ContentExportHistory exportHistory={optionsMock1} />

ContentCategorization,

    <ContentCategorization onCategoryChange={handleClick} categories={optionsMock1} />

ContentCommenting,

    <ContentCommenting onAddComment={handleClick} comments={optionsMock1} />

ContentSecurity,

    <ContentSecurity isSecure={true} />

ABTesting,

    <ABTesting omVariationSelect={handleClick} variations={optionsMock1} />

ContentUserRatings,

    <ContentUserRatings onRate={handleClick} averageRating={strings} />

ContentScheduling,

    <ContentScheduling onSchedule={handleClick} ScheduledDate={strings} />

UserProfiles,

    <UserProfiles users={optionsMock1} />

SocialSharing,

    <SocialSharing onShare={handleClick} />

CommentsModeration,

    <CommentsModeration onModerate={handleClick} comments={optionsMock1} />

ContentTranslation,

    <ContentTranslation onTranslate={handleClick} availableLanguages={optionsMock1} />

RevisionHistory,

    <RevisionHistory revisions={optionsMock1} onSelectRevision={handleClick} />

//AnalyticsCharts,

UserActivityFeed,

    <UserActivityFeed activities={optionsMock1} />

RelatedArticles,

    <RelatedArticles articles={optionsMock1} onArticleCLick={handleClick} />

VersionComparison,

    <VersionComparison onCompare={handleClick} versions={optionsMock1} />

ContentPersonalization,

SocialComments,

    <SocialComments onAddComment={handleClick} comments={optionsMock1} />

ContentDuplication,

    <ContentDuplication onDuplicate={handleClick} />

PublishSettings,

    <PublishSettings onPublishToggle={handleClick} isPublished={true}/>

SEOOptimization,

    <SEOOptimization onUpdateMetaTags={handleClick} metaTags={optionsMock1} />

ContentCategories,

    <ContentCategories categories={optionsMock1} onSelectCategory={handleClick} />

Workflow,

    <Workflow currentStep={strings} onNextStep={handleClick} onPrevStep={handleClick} />

DataExport,

    <DataExport onDataExport={handleClick} />

ContentTagging,

    <ContentTagging onTag={handleClick} tags={optionsMock1} />

PollsAndSurveys,

    <PollsAndSurveys onAnswer={handleClick} questions={optionsMock1} />

ContentReviews,

    <ContentReviews onReview={handleClick} reviews={optionsMock1} />

ContentLicensing,

    <ContentLicensing onLicenseChange={handleClick} licenses={optionsMock1} />

ExportAsPDF,

    <ExportAsPDF onExportPDF={handleClick} />

ShareContent,

    <ShareContent onShare={handleClick} />

ContentEmbed,

    <ContentEmbed onEmbed={handleClick} />

ContentNotification,

    <ContentNotification onNotification={handleClick} notifications={optionsMock1} />

ContentPolling,

    <ContentPolling onPollSubmit={handleClick} pollQuestions={optionsMock1} />

NotificationSubscriptions,

    <NotificationSubscriptions onSubscriptionToggle={handleClick} subscriptions={optionsMock1} />

UserPermissions,

    <UserPermissions onPermissionChange={handleClick} userRoles={optionsMock1} />

SEOSettings,

    <SEOSettings onSEOChange={handleClick} />

ContentTrash,

    <ContentTrash onRestore={handleClick} onDelete={handleClick} />

ContentPublishing,

    <ContentPublishing onPublishToggle={handleClick} isPublished={true} />

UserTracking,

    <UserTracking onTrackingToggle={handleClick} trackUser={'Enabled'} />
