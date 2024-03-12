%% Import data
fn = 'data.mat';
load(fn);

%% plot
figure;
pcolor(z, x, spl);

colormap(MyColor('vik'));
shading interp
clb = colorbar;
xlim([0 8]);
ylim([-2 2]);
xlabel('$z$ (m)', 'Interpreter','latex');
ylabel('$x$ (m)', 'Interpreter','latex');

% make sure the aspect ratio is consistent with the actual dimension ratio
pbaspect([8, 4, 1])
set(gca, 'linewidth', 2);

set(gca, 'fontname', 'times new roman')

% larger font size is preferrable
set(gca, 'fontsize', 20);

clim([0,40]+25);
% export vector figure
exportgraphics(gcf, 'Demo_2D.pdf', 'ContentType', 'vector');
% exportgraphics(gcf, 'Demo_2D.png', 'resolution', '600');