fn = 'data.mat';

fig1 = figure;
pcolor(z, x, spl);
% recommended color scheme
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
set(gca, 'TickLabelInterpreter', 'latex')
set(clb, 'TickLabelInterpreter', 'latex')
% larger font size is preferrable
fontsize(18,'points');
clim([0,40]+25);
% export vector figure
exportgraphics(gcf, 'fig.pdf', 'ContentType', 'vector');